import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { FileText, Plus, Pencil, Trash2, Eye } from 'lucide-react';

type Article = {
    id: number;
    title: string;
    slug: string;
    category: string | null;
    status: 'draft' | 'published';
    published_at: string | null;
    created_at: string;
};

type PaginatedArticles = {
    data: Article[];
    current_page: number;
    last_page: number;
    prev_page_url: string | null;
    next_page_url: string | null;
};

type Props = {
    articles: PaginatedArticles;
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Artikel', href: '/admin/articles' },
];

export default function ArticleIndex({ articles }: Props) {
    function deleteArticle(article: Article) {
        const confirmed = window.confirm(
            `Yakin ingin menghapus artikel "${article.title}"?`,
        );

        if (confirmed) {
            router.delete(`/admin/articles/${article.id}`);
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Artikel" />

            <div className="flex flex-col gap-6 p-4 md:p-6">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                            <FileText size={16} />
                            Content Management
                        </div>

                        <h1 className="text-2xl font-bold tracking-tight">
                            Manajemen Artikel
                        </h1>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Kelola artikel dan edukasi budaya Betawi.
                        </p>
                    </div>

                    <Link
                        href="/admin/articles/create"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                        <Plus size={18} />
                        Tambah Artikel
                    </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border bg-card p-5">
                        <p className="text-sm text-muted-foreground">
                            Total Artikel Halaman Ini
                        </p>
                        <p className="mt-2 text-3xl font-bold">
                            {articles.data.length}
                        </p>
                    </div>

                    <div className="rounded-xl border bg-card p-5">
                        <p className="text-sm text-muted-foreground">
                            Artikel Dipublikasikan
                        </p>
                        <p className="mt-2 text-3xl font-bold">
                            {
                                articles.data.filter(
                                    (article) =>
                                        article.status === 'published',
                                ).length
                            }
                        </p>
                    </div>

                    <div className="rounded-xl border bg-card p-5">
                        <p className="text-sm text-muted-foreground">
                            Artikel Draft
                        </p>
                        <p className="mt-2 text-3xl font-bold">
                            {
                                articles.data.filter(
                                    (article) => article.status === 'draft',
                                ).length
                            }
                        </p>
                    </div>
                </div>

                <div className="overflow-hidden rounded-xl border bg-card">
                    <div className="border-b p-5">
                        <h2 className="font-semibold">Daftar Artikel</h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Daftar artikel yang tersimpan di database.
                        </p>
                    </div>

                    {articles.data.length === 0 ? (
                        <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                            <div className="mb-4 rounded-full bg-muted p-4">
                                <FileText size={28} />
                            </div>

                            <h3 className="font-semibold">
                                Belum ada artikel
                            </h3>

                            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                                Mulai buat artikel pertama untuk mengisi
                                halaman edukasi BetawiBoys.
                            </p>

                            <Link
                                href="/admin/articles/create"
                                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                            >
                                <Plus size={16} />
                                Buat Artikel
                            </Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-muted/50 text-muted-foreground">
                                    <tr>
                                        <th className="px-5 py-4 font-medium">
                                            Artikel
                                        </th>
                                        <th className="px-5 py-4 font-medium">
                                            Kategori
                                        </th>
                                        <th className="px-5 py-4 font-medium">
                                            Status
                                        </th>
                                        <th className="px-5 py-4 font-medium">
                                            Tanggal
                                        </th>
                                        <th className="px-5 py-4 text-right font-medium">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y">
                                    {articles.data.map((article) => (
                                        <tr
                                            key={article.id}
                                            className="transition hover:bg-muted/30"
                                        >
                                            <td className="px-5 py-4">
                                                <p className="font-semibold">
                                                    {article.title}
                                                </p>
                                                <p className="mt-1 text-xs text-muted-foreground">
                                                    /{article.slug}
                                                </p>
                                            </td>

                                            <td className="px-5 py-4">
                                                {article.category || '-'}
                                            </td>

                                            <td className="px-5 py-4">
                                                <span
                                                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                                                        article.status ===
                                                        'published'
                                                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                            : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                                    }`}
                                                >
                                                    {article.status ===
                                                    'published'
                                                        ? 'Published'
                                                        : 'Draft'}
                                                </span>
                                            </td>

                                            <td className="px-5 py-4 text-muted-foreground">
                                                {article.published_at
                                                    ? new Date(
                                                          article.published_at,
                                                      ).toLocaleDateString(
                                                          'id-ID',
                                                          {
                                                              day: 'numeric',
                                                              month: 'short',
                                                              year: 'numeric',
                                                          },
                                                      )
                                                    : new Date(
                                                          article.created_at,
                                                      ).toLocaleDateString(
                                                          'id-ID',
                                                          {
                                                              day: 'numeric',
                                                              month: 'short',
                                                              year: 'numeric',
                                                          },
                                                      )}
                                            </td>

                                            <td className="px-5 py-4">
                                                <div className="flex justify-end gap-2">
                                                    {article.status ===
                                                        'published' && (
                                                        <Link
                                                            href={`/edukasi-betawi/${article.slug}`}
                                                            target="_blank"
                                                            title="Lihat artikel"
                                                            className="rounded-lg border p-2 transition hover:bg-muted"
                                                        >
                                                            <Eye size={16} />
                                                        </Link>
                                                    )}

                                                    <Link
                                                        href={`/admin/articles/${article.id}/edit`}
                                                        title="Edit artikel"
                                                        className="rounded-lg border p-2 transition hover:bg-muted"
                                                    >
                                                        <Pencil size={16} />
                                                    </Link>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            deleteArticle(
                                                                article,
                                                            )
                                                        }
                                                        title="Hapus artikel"
                                                        className="rounded-lg border p-2 text-destructive transition hover:bg-destructive/10"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {articles.last_page > 1 && (
                        <div className="flex items-center justify-between border-t p-4">
                            <p className="text-sm text-muted-foreground">
                                Halaman {articles.current_page} dari{' '}
                                {articles.last_page}
                            </p>

                            <div className="flex gap-2">
                                {articles.prev_page_url && (
                                    <Link
                                        href={articles.prev_page_url}
                                        className="rounded-lg border px-3 py-2 text-sm hover:bg-muted"
                                    >
                                        Sebelumnya
                                    </Link>
                                )}

                                {articles.next_page_url && (
                                    <Link
                                        href={articles.next_page_url}
                                        className="rounded-lg border px-3 py-2 text-sm hover:bg-muted"
                                    >
                                        Berikutnya
                                    </Link>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}