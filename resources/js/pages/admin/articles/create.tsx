import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { ArrowLeft, Save } from 'lucide-react';
import type { FormEvent } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Artikel', href: '/admin/articles' },
    { title: 'Tambah Artikel', href: '/admin/articles/create' },
];

type ArticleForm = {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    status: 'draft' | 'published';
};

export default function ArticleCreate() {
    const { data, setData, post, processing, errors } =
        useForm<ArticleForm>({
            title: '',
            slug: '',
            excerpt: '',
            content: '',
            category: '',
            status: 'draft',
        });

    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        post('/admin/articles');
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Artikel" />

            <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 p-4 md:p-6">
                <div>
                    <Link
                        href="/admin/articles"
                        className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                        <ArrowLeft size={16} />
                        Kembali ke artikel
                    </Link>

                    <h1 className="text-2xl font-bold tracking-tight">
                        Tambah Artikel
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Buat artikel baru untuk edukasi budaya Betawi.
                    </p>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    <div className="rounded-xl border bg-card p-5 md:p-6">
                        <div className="space-y-5">
                            <div>
                                <label
                                    htmlFor="title"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Judul Artikel *
                                </label>

                                <input
                                    id="title"
                                    value={data.title}
                                    onChange={(event) =>
                                        setData('title', event.target.value)
                                    }
                                    className="w-full rounded-lg border bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
                                    placeholder="Contoh: Sejarah Ondel-Ondel"
                                    required
                                />

                                {errors.title && (
                                    <p className="mt-1 text-sm text-destructive">
                                        {errors.title}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="slug"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Slug (opsional)
                                </label>

                                <input
                                    id="slug"
                                    value={data.slug}
                                    onChange={(event) =>
                                        setData('slug', event.target.value)
                                    }
                                    className="w-full rounded-lg border bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
                                    placeholder="sejarah-ondel-ondel"
                                />

                                <p className="mt-1 text-xs text-muted-foreground">
                                    Kosongkan agar slug dibuat otomatis dari
                                    judul.
                                </p>

                                {errors.slug && (
                                    <p className="mt-1 text-sm text-destructive">
                                        {errors.slug}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="category"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Kategori
                                </label>

                                <input
                                    id="category"
                                    value={data.category}
                                    onChange={(event) =>
                                        setData('category', event.target.value)
                                    }
                                    className="w-full rounded-lg border bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
                                    placeholder="Budaya, Sejarah, Kuliner..."
                                />

                                {errors.category && (
                                    <p className="mt-1 text-sm text-destructive">
                                        {errors.category}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="excerpt"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Ringkasan Artikel
                                </label>

                                <textarea
                                    id="excerpt"
                                    value={data.excerpt}
                                    onChange={(event) =>
                                        setData('excerpt', event.target.value)
                                    }
                                    rows={3}
                                    className="w-full rounded-lg border bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
                                    placeholder="Ringkasan singkat yang muncul di daftar artikel..."
                                />

                                {errors.excerpt && (
                                    <p className="mt-1 text-sm text-destructive">
                                        {errors.excerpt}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="content"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Isi Artikel *
                                </label>

                                <textarea
                                    id="content"
                                    value={data.content}
                                    onChange={(event) =>
                                        setData('content', event.target.value)
                                    }
                                    rows={12}
                                    className="w-full rounded-lg border bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
                                    placeholder="Tulis isi artikel di sini..."
                                    required
                                />

                                {errors.content && (
                                    <p className="mt-1 text-sm text-destructive">
                                        {errors.content}
                                    </p>
                                )}

                                <p className="mt-1 text-xs text-muted-foreground">
                                    Untuk tahap ini, isi artikel disimpan
                                    sebagai teks biasa.
                                </p>
                            </div>

                            <div>
                                <label
                                    htmlFor="status"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Status Publikasi
                                </label>

                                <select
                                    id="status"
                                    value={data.status}
                                    onChange={(event) =>
                                        setData(
                                            'status',
                                            event.target.value as
                                                | 'draft'
                                                | 'published',
                                        )
                                    }
                                    className="w-full rounded-lg border bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="published">
                                        Publikasikan
                                    </option>
                                </select>

                                {errors.status && (
                                    <p className="mt-1 text-sm text-destructive">
                                        {errors.status}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse justify-end gap-3 sm:flex-row">
                        <Link
                            href="/admin/articles"
                            className="rounded-lg border px-4 py-2.5 text-center text-sm font-medium hover:bg-muted"
                        >
                            Batal
                        </Link>

                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-50"
                        >
                            <Save size={16} />
                            {processing ? 'Menyimpan...' : 'Simpan Artikel'}
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}