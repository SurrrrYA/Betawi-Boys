<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Carbon\Carbon;
use Inertia\Inertia;
use Inertia\Response;

class EducationController extends Controller
{
    /**
     * Menampilkan semua artikel yang sudah dipublikasikan.
     */
    public function index(): Response
    {
        $articles = Article::published()
            ->latest('published_at')
            ->get()
            ->map(fn (Article $article) => $this->formatArticle($article))
            ->values();

        return Inertia::render('education/index', [
            'articles' => $articles,
        ]);
    }

    /**
     * Menampilkan detail artikel berdasarkan slug.
     */
    public function show(string $slug): Response
    {
        $article = Article::published()
            ->where('slug', $slug)
            ->firstOrFail();

        $relatedArticles = Article::published()
            ->where('id', '!=', $article->id)
            ->latest('published_at')
            ->limit(4)
            ->get()
            ->map(fn (Article $item) => $this->formatArticle($item))
            ->values();

        return Inertia::render('education/show', [
            'article' => $this->formatArticle($article, true),
            'relatedArticles' => $relatedArticles,
        ]);
    }

    /**
     * Mengubah data database menjadi format yang dibutuhkan React.
     */
    private function formatArticle(
        Article $article,
        bool $includeContent = false
    ): array {
        $content = $this->parseContent($article->content);

        $publishedAt = $article->published_at;

        $data = [
            'number' => str_pad((string) $article->id, 2, '0', STR_PAD_LEFT),
            'category' => $article->category ?: 'UMUM',
            'title' => $article->title,
            'slug' => $article->slug,
            'excerpt' => $article->excerpt ?: '',
            'image' => $article->cover_image
                ? (
                    str_starts_with($article->cover_image, 'http://')
                    || str_starts_with($article->cover_image, 'https://')
                        ? $article->cover_image
                        : asset('storage/' . ltrim($article->cover_image, '/'))
                )
                : 'https://placehold.co/1200x900?text=Edukasi+Betawi',
            'reading_time' => $this->calculateReadingTime($article->content),
            'published_at' => $publishedAt
                ? Carbon::parse($publishedAt)->translatedFormat('d F Y')
                : '-',
        ];

        if ($includeContent) {
            $data['content'] = $content;
        }

        return $data;
    }

    /**
     * Mengubah JSON konten menjadi array section untuk React.
     *
     * Format JSON:
     * [
     *   {
     *     "heading": "Judul bagian",
     *     "paragraphs": ["Paragraf pertama", "Paragraf kedua"]
     *   }
     * ]
     */
    private function parseContent(string $content): array
    {
        $decoded = json_decode($content, true);

        if (
            is_array($decoded)
            && array_is_list($decoded)
            && count($decoded) > 0
        ) {
            $sections = [];

            foreach ($decoded as $section) {
                if (! is_array($section)) {
                    continue;
                }

                $heading = trim((string) ($section['heading'] ?? ''));
                $paragraphs = $section['paragraphs'] ?? [];

                if (is_string($paragraphs)) {
                    $paragraphs = [$paragraphs];
                }

                if (! is_array($paragraphs)) {
                    $paragraphs = [];
                }

                $paragraphs = array_values(array_filter(
                    array_map(
                        fn ($paragraph) => trim((string) $paragraph),
                        $paragraphs
                    ),
                    fn ($paragraph) => $paragraph !== ''
                ));

                if ($heading !== '' || count($paragraphs) > 0) {
                    $sections[] = [
                        'heading' => $heading !== '' ? $heading : 'Cerita Betawi',
                        'paragraphs' => $paragraphs,
                    ];
                }
            }

            if (count($sections) > 0) {
                return $sections;
            }
        }

        // Jika konten berupa teks biasa, tampilkan sebagai satu bagian.
        $plainText = trim(strip_tags($content));

        return [
            [
                'heading' => 'Cerita Betawi',
                'paragraphs' => $plainText !== '' ? [$plainText] : [],
            ],
        ];
    }

    /**
     * Menghitung estimasi waktu membaca.
     */
    private function calculateReadingTime(string $content): string
    {
        $plainText = strip_tags($content);
        $wordCount = str_word_count($plainText);

        // Estimasi 200 kata per menit.
        $minutes = max(1, (int) ceil($wordCount / 200));

        return $minutes . ' menit';
    }
}
