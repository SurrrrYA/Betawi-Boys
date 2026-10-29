import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, FileText, Save } from 'lucide-react';
import { FormEvent } from 'react';

type Article = {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    category: string | null;
    status: 'draft' | 'published';
    published_at: string | null;
};

type EditArticleProps = {
    article: Article;
};

export default function EditArticle({ article }: EditArticleProps) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Dashboard',
            href: '/dashboard',
        },
        {
            title: 'Manajemen Artikel',
            href: '/admin/articles',
        },
        {
            title: 'Edit Artikel',
            href: `/admin/articles/${article.id}/edit`,
        },
    ];

    const { data, setData, put, processing, errors } = useForm({
        title: article.title ?? '',
        slug: article.slug ?? '',
        category: article.category ?? '',
        excerpt: article.excerpt ?? '',
        content: article.content ?? '',
        status: article.status ?? 'draft',
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        put(`/admin/articles/${article.id}`, {
            preserveScroll: true,
        });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Artikel - ${article.title}`} />

            <div className="min-h-full space-y-6 bg-[#090909] p-4 text-white sm:p-6 lg:p-8">
                {/* Header */}
                <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <Link
                            href="/admin/articles"
                            className="mb-5 inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-emerald-300"
                        >
                            <ArrowLeft className="size-4" />
                            Kembali ke daftar artikel
                        </Link>

                        <div className="flex items-center gap-3">
                            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3">
                                <FileText className="size-6 text-emerald-300" />
                            </div>

                            <div>
                                <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
                                    Content Management
                                </p>

                                <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                                    Edit Artikel
                                </h1>
                            </div>
                        </div>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-400">
                            Perbarui informasi artikel budaya Betawi yang
                            sudah tersimpan.
                        </p>
                    </div>

                    <span
                        className={`w-fit rounded-full border px-3 py-1.5 text-xs font-medium ${
                            data.status === 'published'
                                ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300'
                                : 'border-amber-500/20 bg-amber-500/10 text-amber-300'
                        }`}
                    >
                        {data.status === 'published'
                            ? 'Sudah dipublikasikan'
                            : 'Draft'}
                    </span>
                </section>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
                        {/* Main content */}
                        <div className="space-y-6">
                            <section className="space-y-5 rounded-2xl border border-white/[0.08] bg-[#111111] p-5 sm:p-6">
                                <div className="border-b border-white/[0.08] pb-4">
                                    <h2 className="font-semibold">
                                        Informasi Artikel
                                    </h2>

                                    <p className="mt-1 text-sm text-neutral-500">
                                        Atur judul dan informasi dasar artikel.
                                    </p>
                                </div>

                                {/* Title */}
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="mb-2 block text-sm font-medium text-neutral-300"
                                    >
                                        Judul Artikel
                                        <span className="ml-1 text-red-400">
                                            *
                                        </span>
                                    </label>

                                    <input
                                        id="title"
                                        type="text"
                                        value={data.title}
                                        onChange={(event) =>
                                            setData('title', event.target.value)
                                        }
                                        placeholder="Contoh: Mengenal Budaya Betawi"
                                        className="w-full rounded-xl border border-white/10 bg-[#090909] px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/10"
                                        required
                                    />

                                    {errors.title && (
                                        <p className="mt-2 text-xs text-red-400">
                                            {errors.title}
                                        </p>
                                    )}
                                </div>

                                {/* Slug */}
                                <div>
                                    <label
                                        htmlFor="slug"
                                        className="mb-2 block text-sm font-medium text-neutral-300"
                                    >
                                        Slug URL
                                    </label>

                                    <input
                                        id="slug"
                                        type="text"
                                        value={data.slug}
                                        onChange={(event) =>
                                            setData('slug', event.target.value)
                                        }
                                        placeholder="mengenal-budaya-betawi"
                                        className="w-full rounded-xl border border-white/10 bg-[#090909] px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/10"
                                    />

                                    <p className="mt-2 text-xs text-neutral-500">
                                        Digunakan sebagai alamat artikel di
                                        website.
                                    </p>

                                    {errors.slug && (
                                        <p className="mt-2 text-xs text-red-400">
                                            {errors.slug}
                                        </p>
                                    )}
                                </div>

                                {/* Category */}
                                <div>
                                    <label
                                        htmlFor="category"
                                        className="mb-2 block text-sm font-medium text-neutral-300"
                                    >
                                        Kategori
                                    </label>

                                    <input
                                        id="category"
                                        type="text"
                                        value={data.category}
                                        onChange={(event) =>
                                            setData(
                                                'category',
                                                event.target.value,
                                            )
                                        }
                                        placeholder="Contoh: Sejarah, Tradisi, Kuliner"
                                        className="w-full rounded-xl border border-white/10 bg-[#090909] px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/10"
                                    />

                                    {errors.category && (
                                        <p className="mt-2 text-xs text-red-400">
                                            {errors.category}
                                        </p>
                                    )}
                                </div>

                                {/* Excerpt */}
                                <div>
                                    <label
                                        htmlFor="excerpt"
                                        className="mb-2 block text-sm font-medium text-neutral-300"
                                    >
                                        Ringkasan Artikel
                                    </label>

                                    <textarea
                                        id="excerpt"
                                        value={data.excerpt}
                                        onChange={(event) =>
                                            setData(
                                                'excerpt',
                                                event.target.value,
                                            )
                                        }
                                        rows={3}
                                        placeholder="Tuliskan ringkasan singkat untuk ditampilkan pada halaman daftar artikel."
                                        className="w-full resize-y rounded-xl border border-white/10 bg-[#090909] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-neutral-600 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/10"
                                    />

                                    {errors.excerpt && (
                                        <p className="mt-2 text-xs text-red-400">
                                            {errors.excerpt}
                                        </p>
                                    )}
                                </div>

                                {/* Content */}
                                <div>
                                    <label
                                        htmlFor="content"
                                        className="mb-2 block text-sm font-medium text-neutral-300"
                                    >
                                        Isi Artikel
                                        <span className="ml-1 text-red-400">
                                            *
                                        </span>
                                    </label>

                                    <textarea
                                        id="content"
                                        value={data.content}
                                        onChange={(event) =>
                                            setData(
                                                'content',
                                                event.target.value,
                                            )
                                        }
                                        rows={16}
                                        placeholder="Tuliskan isi artikel di sini..."
                                        className="w-full resize-y rounded-xl border border-white/10 bg-[#090909] px-4 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-neutral-600 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/10"
                                        required
                                    />

                                    <p className="mt-2 text-xs text-neutral-500">
                                        Untuk saat ini, isi artikel disimpan
                                        sebagai teks biasa.
                                    </p>

                                    {errors.content && (
                                        <p className="mt-2 text-xs text-red-400">
                                            {errors.content}
                                        </p>
                                    )}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar settings */}
                        <aside className="space-y-6">
                            <section className="rounded-2xl border border-white/[0.08] bg-[#111111] p-5">
                                <h2 className="font-semibold">
                                    Pengaturan Publikasi
                                </h2>

                                <p className="mt-1 text-sm text-neutral-500">
                                    Atur status artikel.
                                </p>

                                <div className="mt-5 space-y-3">
                                    <label
                                        className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                                            data.status === 'draft'
                                                ? 'border-amber-500/30 bg-amber-500/[0.06]'
                                                : 'border-white/[0.08] hover:bg-white/[0.02]'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="status"
                                            value="draft"
                                            checked={data.status === 'draft'}
                                            onChange={() =>
                                                setData('status', 'draft')
                                            }
                                            className="mt-1 accent-amber-400"
                                        />

                                        <div>
                                            <p className="text-sm font-medium text-white">
                                                Draft
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-neutral-500">
                                                Simpan artikel tanpa
                                                mempublikasikannya.
                                            </p>
                                        </div>
                                    </label>

                                    <label
                                        className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                                            data.status === 'published'
                                                ? 'border-emerald-500/30 bg-emerald-500/[0.06]'
                                                : 'border-white/[0.08] hover:bg-white/[0.02]'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="status"
                                            value="published"
                                            checked={
                                                data.status === 'published'
                                            }
                                            onChange={() =>
                                                setData('status', 'published')
                                            }
                                            className="mt-1 accent-emerald-400"
                                        />

                                        <div>
                                            <p className="text-sm font-medium text-white">
                                                Publikasikan
                                            </p>

                                            <p className="mt-1 text-xs leading-5 text-neutral-500">
                                                Tandai artikel sebagai
                                                diterbitkan.
                                            </p>
                                        </div>
                                    </label>
                                </div>

                                {errors.status && (
                                    <p className="mt-2 text-xs text-red-400">
                                        {errors.status}
                                    </p>
                                )}
                            </section>

                            <section className="rounded-2xl border border-white/[0.08] bg-[#111111] p-5">
                                <h2 className="font-semibold">
                                    Informasi Sistem
                                </h2>

                                <div className="mt-4 space-y-4 text-sm">
                                    <div>
                                        <p className="text-xs text-neutral-500">
                                            ID Artikel
                                        </p>

                                        <p className="mt-1 text-neutral-300">
                                            #{article.id}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-neutral-500">
                                            Status saat ini
                                        </p>

                                        <p className="mt-1 text-neutral-300">
                                            {article.status === 'published'
                                                ? 'Published'
                                                : 'Draft'}
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-5">
                                <h3 className="text-sm font-medium text-emerald-200">
                                    Sebelum menyimpan
                                </h3>

                                <p className="mt-2 text-xs leading-6 text-neutral-400">
                                    Pastikan judul, ringkasan, isi, dan status
                                    artikel sudah sesuai sebelum menyimpan
                                    perubahan.
                                </p>
                            </section>
                        </aside>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col-reverse justify-end gap-3 border-t border-white/[0.08] pt-5 sm:flex-row">
                        <Link
                            href="/admin/articles"
                            className="inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-neutral-300 transition hover:bg-white/[0.05]"
                        >
                            Batal
                        </Link>

                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <Save className="size-4" />

                            {processing
                                ? 'Menyimpan...'
                                : 'Simpan Perubahan'}
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}