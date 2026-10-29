import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    BookOpen,
} from 'lucide-react';

type ArticleSection = {
    heading: string;
    paragraphs: string[];
};

type Article = {
    number: string;
    category: string;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    reading_time: string;
    published_at: string;
    content: ArticleSection[];
};

type RelatedArticle = {
    number: string;
    category: string;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    reading_time: string;
    published_at: string;
};

type EducationShowProps = {
    article: Article;
    relatedArticles: RelatedArticle[];
};

export default function EducationShow({
    article,
    relatedArticles,
}: EducationShowProps) {
    return (
        <>
            <Head title={`${article.title} — Edukasi Betawi`}>
                <meta
                    name="description"
                    content={article.excerpt}
                />

                <meta
                    property="og:title"
                    content={article.title}
                />

                <meta
                    property="og:description"
                    content={article.excerpt}
                />

                <meta
                    property="og:image"
                    content={article.image}
                />
            </Head>

            <div className="min-h-screen bg-[#f5f3ee] text-[#111111]">
                {/* Navigation */}
                <header className="border-b border-black/10">
                    <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
                        <Link href="/" className="flex items-center gap-2.5">
                            <span className="flex h-9 w-9 items-center justify-center bg-[#d71920] text-xl font-black text-white">
                                B.
                            </span>

                            <span className="text-xl font-black tracking-[-0.07em]">
                                BETAWI
                                <span className="text-[#d71920]">BOYS</span>
                            </span>
                        </Link>

                        <Link
                            href="/edukasi-betawi"
                            className="flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] transition-colors hover:text-[#d71920] sm:text-xs"
                        >
                            <ArrowLeft size={15} />
                            SEMUA ARTIKEL
                        </Link>
                    </div>
                </header>

                <main>
                    {/* Article header */}
                    <section className="bg-[#111111] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-12">
                        <div className="mx-auto max-w-4xl">
                            <Link
                                href="/edukasi-betawi"
                                className="mb-10 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-white/55 transition-colors hover:text-white"
                            >
                                <ArrowLeft size={14} />
                                EDUKASI BETAWI
                            </Link>

                            <div className="mb-6">
                                <span className="bg-[#d71920] px-3 py-2 text-[9px] font-bold tracking-[0.18em]">
                                    {article.category}
                                </span>
                            </div>

                            <h1 className="text-4xl leading-[0.95] font-black tracking-[-0.07em] sm:text-6xl lg:text-7xl">
                                {article.title}
                            </h1>

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                                {article.excerpt}
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4 text-[10px] font-semibold tracking-[0.1em] text-white/50">
                                <span>{article.published_at}</span>

                                <span>·</span>

                                <span>{article.reading_time} membaca</span>
                            </div>
                        </div>
                    </section>

                    {/* Cover image */}
                    <section className="mx-auto max-w-5xl px-5 pt-8 sm:px-8 sm:pt-12">
                        <div className="relative aspect-[16/9] overflow-hidden bg-[#e7e3dc]">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </section>

                    {/* Article body */}
                    <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
                        <div className="mb-10 flex items-center gap-3 border-b border-black/15 pb-6">
                            <BookOpen
                                size={19}
                                className="text-[#d71920]"
                            />

                            <p className="text-[10px] font-bold tracking-[0.2em]">
                                MENELUSURI CERITA BETAWI
                            </p>
                        </div>

                        <div className="space-y-10">
                            {article.content.map((section, index) => (
                                <section key={`${article.slug}-${index}`}>
                                    <h2 className="text-2xl leading-tight font-black tracking-[-0.045em] sm:text-3xl">
                                        {section.heading}
                                    </h2>

                                    <div className="mt-5 space-y-5">
                                        {section.paragraphs.map(
                                            (paragraph, paragraphIndex) => (
                                                <p
                                                    key={`${index}-${paragraphIndex}`}
                                                    className="text-base leading-8 text-black/70"
                                                >
                                                    {paragraph}
                                                </p>
                                            ),
                                        )}
                                    </div>
                                </section>
                            ))}
                        </div>

                        <div className="mt-14 border-y border-black/15 py-7">
                            <p className="text-[10px] font-bold tracking-[0.2em] text-[#d71920]">
                                BETAWIBOYS · EDUKASI BETAWI
                            </p>

                            <p className="mt-3 text-sm leading-7 text-black/60">
                                Mengenal budaya adalah salah satu langkah
                                untuk menghargai dan menjaga warisan yang
                                diteruskan dari generasi ke generasi.
                            </p>
                        </div>

                        <Link
                            href="/edukasi-betawi"
                            className="group mt-8 inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] transition-colors hover:text-[#d71920]"
                        >
                            <ArrowLeft size={16} />
                            KEMBALI KE SEMUA ARTIKEL
                        </Link>
                    </article>

                    {/* Related articles */}
                    {relatedArticles.length > 0 && (
                        <section className="bg-[#eae7e0] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
                            <div className="mx-auto max-w-[1400px]">
                                <div className="mb-10 flex items-end justify-between gap-4">
                                    <div>
                                        <p className="mb-3 text-[10px] font-bold tracking-[0.25em] text-[#d71920]">
                                            LANJUTKAN PENJELAJAHAN
                                        </p>

                                        <h2 className="text-3xl font-black tracking-[-0.06em] sm:text-5xl">
                                            Cerita Lainnya.
                                        </h2>
                                    </div>

                                    <Link
                                        href="/edukasi-betawi"
                                        className="hidden items-center gap-2 text-[10px] font-bold tracking-[0.12em] transition-colors hover:text-[#d71920] sm:inline-flex"
                                    >
                                        SEMUA ARTIKEL
                                        <ArrowUpRight size={15} />
                                    </Link>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    {relatedArticles.map((related) => (
                                        <Link
                                            key={related.slug}
                                            href={`/edukasi-betawi/${related.slug}`}
                                            className="group grid grid-cols-[120px_1fr] gap-4 border-b border-black/15 pb-5 sm:grid-cols-[200px_1fr] sm:gap-6"
                                        >
                                            <div className="aspect-square overflow-hidden bg-[#d8d3ca] sm:aspect-[4/3]">
                                                <img
                                                    src={related.image}
                                                    alt={related.title}
                                                    loading="lazy"
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>

                                            <div className="py-1">
                                                <p className="text-[9px] font-bold tracking-[0.16em] text-[#d71920]">
                                                    {related.category}
                                                </p>

                                                <h3 className="mt-3 text-lg leading-tight font-black tracking-tight transition-colors group-hover:text-[#d71920] sm:text-2xl">
                                                    {related.title}
                                                </h3>

                                                <p className="mt-3 line-clamp-3 text-xs leading-6 text-black/55 sm:text-sm">
                                                    {related.excerpt}
                                                </p>

                                                <span className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold tracking-[0.15em]">
                                                    BACA ARTIKEL
                                                    <ArrowRight
                                                        size={14}
                                                        className="transition-transform group-hover:translate-x-1"
                                                    />
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}
                </main>

                {/* Footer */}
                <footer className="bg-[#111111] px-5 py-7 text-white sm:px-8 lg:px-12">
                    <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 text-[10px] tracking-wider text-white/45 sm:flex-row">
                        <p>
                            © {new Date().getFullYear()} BetawiBoys.
                        </p>

                        <Link
                            href="/"
                            className="transition-colors hover:text-white"
                        >
                            ROOTED IN BUDAYA. BUILT FOR JALANAN.
                        </Link>
                    </div>
                </footer>
            </div>
        </>
    );
}