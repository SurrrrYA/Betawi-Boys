import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    ArrowUpRight,
    Boxes,
    FileText,
    FolderOpen,
    Package,
    ShoppingBag,
    Sparkles,
} from 'lucide-react';

type DashboardStats = {
    total_products: number;
    active_products: number;
    total_categories: number;
    total_requests: number;
};

type Product = {
    id: number;
    category_id: number | null;
    name: string;
    slug: string;
    price: string | number;
    stock: number;
    is_active: boolean;
    created_at: string;
    category: {
        id: number;
        name: string;
    } | null;
};

type DashboardProps = {
    stats: DashboardStats;
    latestProducts: Product[];
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

function formatRupiah(price: string | number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(Number(price));
}

function formatDate(date: string) {
    return new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }).format(new Date(date));
}

function StatCard({
    title,
    value,
    description,
    icon: Icon,
    accent,
}: {
    title: string;
    value: number;
    description: string;
    icon: typeof Package;
    accent: string;
}) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30">
            <div className="absolute -right-8 -top-8 size-28 rounded-full bg-emerald-500/[0.04] blur-2xl transition group-hover:bg-emerald-500/[0.09]" />

            <div className="relative flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm text-neutral-400">{title}</p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                        {value.toLocaleString('id-ID')}
                    </h2>
                </div>

                <div
                    className={`rounded-xl border border-white/[0.08] bg-white/[0.04] p-3 ${accent}`}
                >
                    <Icon className="size-5" />
                </div>
            </div>

            <div className="relative mt-5 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                <p className="text-xs text-neutral-500">{description}</p>
            </div>
        </div>
    );
}

function QuickAction({
    title,
    description,
    href,
    icon: Icon,
    label,
}: {
    title: string;
    description: string;
    href: string;
    icon: typeof Package;
    label: string;
}) {
    return (
        <div className="group flex flex-col rounded-2xl border border-white/[0.08] bg-[#111111] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-[#141414]">
            <div className="mb-5 flex items-center justify-between">
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-3 text-emerald-300">
                    <Icon className="size-5" />
                </div>

                <span className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                    {label}
                </span>
            </div>

            <h3 className="font-medium text-white">{title}</h3>

            <p className="mt-2 flex-1 text-sm leading-6 text-neutral-500">
                {description}
            </p>

            <Link
                href={href}
                className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-neutral-300 transition hover:text-emerald-300"
            >
                Buka menu
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
        </div>
    );
}

export default function Dashboard({
    stats,
    latestProducts,
}: DashboardProps) {
    const inactiveProducts = Math.max(
        0,
        stats.total_products - stats.active_products,
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard Admin" />

            <div className="min-h-full space-y-8 bg-[#090909] p-4 text-white sm:p-6 lg:p-8">
                {/* Header */}
                <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1.5">
                            <Sparkles className="size-3.5 text-emerald-300" />
                            <span className="text-xs font-medium text-emerald-200">
                                BetawiBoys Admin Panel
                            </span>
                        </div>

                        <p className="text-sm text-neutral-500">
                            Overview / Dashboard
                        </p>

                        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Dashboard
                            <span className="text-emerald-400">.</span>
                        </h1>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-400">
                            Pantau dan kelola aktivitas website BetawiBoys
                            melalui satu tempat.
                        </p>
                    </div>

                    <Link
                        href="/"
                        className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium transition hover:border-emerald-500/30 hover:bg-white/[0.06]"
                    >
                        Lihat Website
                        <ArrowUpRight className="size-4 text-emerald-300" />
                    </Link>
                </section>

                {/* Statistics */}
                <section>
                    <div className="mb-4">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
                            Analytics
                        </p>

                        <h2 className="mt-2 text-lg font-semibold">
                            Ringkasan Data
                        </h2>

                        <p className="mt-1 text-sm text-neutral-500">
                            Statistik berdasarkan data yang tersimpan di
                            database.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        <StatCard
                            title="Total Produk"
                            value={stats.total_products}
                            description={`${stats.active_products} produk aktif`}
                            icon={Package}
                            accent="text-emerald-300"
                        />

                        <StatCard
                            title="Kategori"
                            value={stats.total_categories}
                            description="Kategori katalog produk"
                            icon={FolderOpen}
                            accent="text-sky-300"
                        />

                        <StatCard
                            title="Permintaan Produksi"
                            value={stats.total_requests}
                            description="Total permintaan tercatat"
                            icon={ShoppingBag}
                            accent="text-violet-300"
                        />

                        <StatCard
                            title="Produk Nonaktif"
                            value={inactiveProducts}
                            description="Produk yang tidak aktif"
                            icon={Boxes}
                            accent="text-amber-300"
                        />
                    </div>
                </section>

                {/* Quick actions */}
                <section>
                    <div className="mb-4">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
                            Workspace
                        </p>

                        <h2 className="mt-2 text-lg font-semibold">
                            Akses Cepat
                        </h2>

                        <p className="mt-1 text-sm text-neutral-500">
                            Pintasan menuju fitur utama pengelolaan website.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        <QuickAction
                            title="Kelola Produk"
                            description="Lihat katalog produk dan kelola informasi produk yang ditampilkan di website."
                            href="/"
                            icon={Package}
                            label="Katalog"
                        />

                        <QuickAction
                            title="Manajemen Artikel"
                            description="Buat, edit, simpan sebagai draft, dan publikasikan artikel budaya Betawi."
                            href="/admin/articles"
                            icon={FileText}
                            label="Konten"
                        />

                        <QuickAction
                            title="One Production"
                            description="Pantau jumlah permintaan produksi khusus yang masuk dari pelanggan."
                            href="/one-production"
                            icon={ShoppingBag}
                            label="Produksi"
                        />
                    </div>
                </section>

                {/* Latest products */}
                <section className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111]">
                    <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] p-5 sm:flex-row sm:items-center sm:p-6">
                        <div className="flex items-start gap-3">
                            <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-2.5">
                                <Package className="size-5 text-emerald-300" />
                            </div>

                            <div>
                                <h2 className="font-semibold">
                                    Produk Terbaru
                                </h2>

                                <p className="mt-1 text-sm text-neutral-500">
                                    Lima produk terakhir yang tercatat.
                                </p>
                            </div>
                        </div>

                        <span className="w-fit rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-neutral-400">
                            {latestProducts.length} produk ditampilkan
                        </span>
                    </div>

                    {latestProducts.length === 0 ? (
                        <div className="flex flex-col items-center px-5 py-16 text-center">
                            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                                <Package className="size-8 text-neutral-500" />
                            </div>

                            <h3 className="mt-4 font-medium">
                                Belum ada produk
                            </h3>

                            <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-500">
                                Produk yang tersimpan di database akan muncul
                                di bagian ini.
                            </p>

                            <Link
                                href="/"
                                className="mt-5 inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200"
                            >
                                Lihat katalog
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[700px] text-left text-sm">
                                <thead>
                                    <tr className="border-b border-white/[0.06] bg-white/[0.015] text-xs uppercase tracking-wider text-neutral-500">
                                        <th className="px-5 py-4 font-medium">
                                            Produk
                                        </th>

                                        <th className="px-5 py-4 font-medium">
                                            Kategori
                                        </th>

                                        <th className="px-5 py-4 font-medium">
                                            Harga
                                        </th>

                                        <th className="px-5 py-4 font-medium">
                                            Stok
                                        </th>

                                        <th className="px-5 py-4 font-medium">
                                            Status
                                        </th>

                                        <th className="px-5 py-4 font-medium">
                                            Dibuat
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {latestProducts.map((product) => (
                                        <tr
                                            key={product.id}
                                            className="border-b border-white/[0.05] transition last:border-0 hover:bg-white/[0.025]"
                                        >
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                                                        <Package className="size-4 text-neutral-400" />
                                                    </div>

                                                    <div>
                                                        <p className="font-medium text-white">
                                                            {product.name}
                                                        </p>

                                                        <p className="mt-1 text-xs text-neutral-500">
                                                            {product.slug}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-5 py-4 text-neutral-400">
                                                {product.category?.name ??
                                                    'Tanpa kategori'}
                                            </td>

                                            <td className="px-5 py-4 font-medium text-neutral-200">
                                                {formatRupiah(product.price)}
                                            </td>

                                            <td className="px-5 py-4 text-neutral-300">
                                                {product.stock.toLocaleString(
                                                    'id-ID',
                                                )}
                                            </td>

                                            <td className="px-5 py-4">
                                                <span
                                                    className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium ${
                                                        product.is_active
                                                            ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300'
                                                            : 'border-neutral-500/20 bg-neutral-500/10 text-neutral-400'
                                                    }`}
                                                >
                                                    <span
                                                        className={`size-1.5 rounded-full ${
                                                            product.is_active
                                                                ? 'bg-emerald-400'
                                                                : 'bg-neutral-500'
                                                        }`}
                                                    />

                                                    {product.is_active
                                                        ? 'Aktif'
                                                        : 'Nonaktif'}
                                                </span>
                                            </td>

                                            <td className="px-5 py-4 text-neutral-500">
                                                {formatDate(product.created_at)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    <div className="flex flex-col justify-between gap-2 border-t border-white/[0.08] px-5 py-4 sm:flex-row sm:items-center">
                        <p className="text-xs text-neutral-500">
                            Data diambil dari database produk.
                        </p>

                        <div className="inline-flex items-center gap-2 text-xs text-neutral-500">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                            </span>

                            Data database
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="flex flex-col justify-between gap-2 border-t border-white/[0.06] pt-5 text-xs text-neutral-600 sm:flex-row">
                    <p>BetawiBoys Admin Panel</p>
                    <p>Kelola konten dan aktivitas website kamu.</p>
                </footer>
            </div>
        </AppLayout>
    );
}