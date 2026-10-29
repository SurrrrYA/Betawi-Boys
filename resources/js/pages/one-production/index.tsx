import { Head, Link, useForm } from '@inertiajs/react';
import {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    Menu,
    MessageCircle,
    PackageCheck,
    Printer,
    Shirt,
    Sparkles,
    Truck,
    X,
} from 'lucide-react';
import { useState, type FormEvent } from 'react';

const services = [
    {
        number: '01',
        title: 'Digital Printing',
        description:
            'Solusi kebutuhan cetak untuk promosi bisnis, acara, pameran, dan kebutuhan visual lainnya.',
        image: 'photo-1505373877841-8d25f7d46678',
        icon: Printer,
        tag: 'PRINTING',
    },
    {
        number: '02',
        title: 'Sablon Kaos',
        description:
            'Produksi kaos custom untuk brand, komunitas, merchandise, dan berbagai kebutuhan acara.',
        image: 'photo-1521572163474-6864f9cf17ab',
        icon: Shirt,
        tag: 'APPAREL',
    },
    {
        number: '03',
        title: 'Seragam Custom',
        description:
            'Pembuatan seragam untuk perusahaan, sekolah, organisasi, komunitas, dan tim kerja.',
        image: 'photo-1551488831-00ddcb6c6bd3',
        icon: PackageCheck,
        tag: 'UNIFORM',
    },
    {
        number: '04',
        title: 'Merchandise',
        description:
            'Produk promosi custom untuk meningkatkan identitas brand dan memberikan pengalaman berkesan.',
        image: 'photo-1503341504253-dff4815485f1',
        icon: Sparkles,
        tag: 'PROMOTIONAL',
    },
];

const processSteps = [
    {
        number: '01',
        title: 'Konsultasi',
        description:
            'Ceritakan ide, kebutuhan, jumlah, dan target waktu pengerjaan.',
    },
    {
        number: '02',
        title: 'Penawaran',
        description:
            'Spesifikasi dan estimasi biaya dibahas sesuai kebutuhan proyek.',
    },
    {
        number: '03',
        title: 'Persetujuan',
        description:
            'Detail pesanan, harga, dan waktu pengerjaan disepakati sebelum produksi.',
    },
    {
        number: '04',
        title: 'Produksi',
        description:
            'Pesanan diproses dan diperiksa sebelum diserahkan kepada pelanggan.',
    },
];

const portfolio = [
    {
        title: 'Custom Apparel',
        category: 'Sablon & pakaian',
        image: 'photo-1521572163474-6864f9cf17ab',
    },
    {
        title: 'Uniform Project',
        category: 'Seragam custom',
        image: 'photo-1551488831-00ddcb6c6bd3',
    },
    {
        title: 'Creative Merchandise',
        category: 'Produk promosi',
        image: 'photo-1503341504253-dff4815485f1',
    },
];

const missions = [
    'Memberikan layanan produksi dan percetakan sesuai kebutuhan pelanggan.',
    'Menjaga kualitas hasil produksi dan ketelitian dalam setiap pengerjaan.',
    'Membangun komunikasi yang baik selama proses pemesanan.',
    'Mengembangkan kreativitas dan solusi yang relevan bagi pelanggan.',
    'Membangun hubungan kerja sama jangka panjang dengan pelanggan.',
];

const whatsappNumber = ''; // Isi nomor WhatsApp resmi, contoh: 6285813133300.

function getWhatsAppUrl() {
    const message = encodeURIComponent(
        'Halo One Production, saya ingin berkonsultasi mengenai kebutuhan digital printing, sablon, seragam, atau merchandise.',
    );

    return whatsappNumber
        ? `https://wa.me/${whatsappNumber}?text=${message}`
        : '#form-permintaan';
}

function SectionLabel({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <p className="flex items-center gap-2 text-[10px] font-extrabold tracking-[0.22em] text-[#168BFF] sm:text-xs">
            <span className="h-2 w-2 bg-[#168BFF]" />
            {children}
        </p>
    );
}

export default function OneProduction() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const form = useForm({
        name: '',
        contact: '',
        production_type: '',
        quantity: '',
        details: '',
    });

    function closeMenu() {
        setMenuOpen(false);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitted(false);

        form.post('/one-production/requests', {
            preserveScroll: true,
            onSuccess: () => {
                form.reset();
                setSubmitted(true);
            },
        });
    }

    return (
        <>
            <Head title="One Production | Digital Printing & Apparel">
                <meta
                    name="description"
                    content="One Production melayani digital printing, sablon kaos, seragam custom, dan merchandise untuk bisnis, komunitas, serta organisasi."
                />
                <meta name="theme-color" content="#168BFF" />
            </Head>

            <div className="min-h-screen overflow-hidden bg-white font-sans text-[#12334F]">
                {/* TOP BAR */}
                <div className="bg-[#0756B8] px-4 py-2.5 text-center text-[9px] font-bold tracking-[0.18em] text-white sm:text-[10px] sm:tracking-[0.25em]">
                    DIGITAL PRINTING &nbsp;·&nbsp; SABLON &nbsp;·&nbsp;
                    APPAREL & MERCHANDISE
                </div>

                {/* NAVBAR */}
                <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur-xl">
                    <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
                        <Link
                            href="/"
                            onClick={closeMenu}
                            aria-label="Kembali ke halaman utama BetawiBoys"
                            className="flex shrink-0 items-center gap-3"
                        >
                            <span className="flex h-11 w-11 items-center justify-center bg-[#168BFF] text-white">
                                <Shirt size={24} />
                            </span>

                            <span>
                                <span className="block text-base leading-none font-black tracking-[-0.055em] sm:text-lg">
                                    ONE
                                    <span className="text-[#168BFF]">.</span>
                                    PRODUCTION
                                </span>

                                <span className="mt-1.5 block text-[8px] font-bold tracking-[0.17em] text-slate-500 sm:text-[9px] sm:tracking-[0.22em]">
                                    PRINTSHOP · DIGITAL PRINTING
                                </span>
                            </span>
                        </Link>

                        <nav className="hidden items-center gap-6 text-xs font-bold text-slate-600 xl:flex">
                            <Link
                                href="/"
                                className="text-[#0756B8] transition hover:text-[#168BFF]"
                            >
                                BetawiBoys
                            </Link>

                            <a href="#layanan" className="transition hover:text-[#168BFF]">
                                Layanan
                            </a>

                            <a href="#tentang" className="transition hover:text-[#168BFF]">
                                Tentang Kami
                            </a>

                            <a href="#portofolio" className="transition hover:text-[#168BFF]">
                                Portofolio
                            </a>

                            <a href="#proses" className="transition hover:text-[#168BFF]">
                                Alur Pemesanan
                            </a>
                        </nav>

                        <div className="flex shrink-0 items-center gap-2">
                            {/* TOMBOL KEMBALI DESKTOP */}
                            <Link
                                href="/"
                                onClick={closeMenu}
                                className="hidden items-center gap-2 border border-[#168BFF] px-3 py-3 text-[10px] font-extrabold text-[#0756B8] transition hover:bg-[#E8F4FF] sm:inline-flex sm:px-4 sm:text-xs"
                            >
                                <ArrowLeft size={15} />
                                Kembali ke BetawiBoys
                            </Link>

                            <a
                                href={getWhatsAppUrl()}
                                className="hidden items-center gap-2 bg-[#168BFF] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#0756B8] md:inline-flex"
                            >
                                <MessageCircle size={15} />
                                Konsultasi
                                <ArrowUpRight size={15} />
                            </a>

                            <button
                                type="button"
                                aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
                                aria-expanded={menuOpen}
                                onClick={() => setMenuOpen((open) => !open)}
                                className="flex h-10 w-10 items-center justify-center border border-blue-100 text-[#0756B8] lg:hidden"
                            >
                                {menuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* MOBILE MENU */}
                    {menuOpen && (
                        <nav className="border-t border-blue-100 bg-white px-5 py-3 lg:hidden">
                            <Link
                                href="/"
                                onClick={closeMenu}
                                className="mb-2 flex items-center gap-3 bg-[#E8F4FF] px-4 py-4 text-sm font-extrabold text-[#0756B8]"
                            >
                                <ArrowLeft size={17} />
                                Kembali ke BetawiBoys
                            </Link>

                            {[
                                ['Layanan', '#layanan'],
                                ['Tentang Kami', '#tentang'],
                                ['Portofolio', '#portofolio'],
                                ['Alur Pemesanan', '#proses'],
                                ['Ajukan Permintaan', '#form-permintaan'],
                            ].map(([label, href]) => (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={closeMenu}
                                    className="block border-b border-slate-100 py-4 text-sm font-semibold last:border-0"
                                >
                                    {label}
                                </a>
                            ))}

                            <a
                                href={getWhatsAppUrl()}
                                onClick={closeMenu}
                                className="mt-3 flex items-center justify-center gap-2 bg-[#168BFF] px-4 py-4 text-sm font-bold text-white"
                            >
                                <MessageCircle size={17} />
                                Konsultasi Sekarang
                            </a>
                        </nav>
                    )}
                </header>

                <main>
                    {/* HERO */}
                    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#168BFF] via-[#0879E8] to-[#0756B8] text-white">
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/20" />
                            <div className="absolute -right-12 top-12 h-72 w-72 rounded-full border border-white/15" />
                            <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
                        </div>

                        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:py-24">
                            <div>
                                <div className="inline-flex items-center gap-3 border border-white/40 bg-white/10 px-4 py-3 text-[9px] font-extrabold tracking-[0.17em] backdrop-blur-sm sm:text-[10px]">
                                    <span className="h-2 w-2 bg-[#BFE3FF]" />
                                    MITRA CETAK & PRODUKSI KREATIF
                                </div>

                                <h1 className="mt-8 max-w-3xl text-5xl leading-[0.95] font-black tracking-[-0.075em] sm:text-6xl md:text-7xl lg:text-[clamp(4rem,7vw,6.8rem)]">
                                    DARI IDE.
                                    <br />
                                    <span className="text-[#C7E7FF]">
                                        JADI NYATA.
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
                                    Mitra untuk kebutuhan digital printing,
                                    sablon, seragam, dan merchandise promosi
                                    bisnis. Kamu bawa idenya, kita bahas cara
                                    mewujudkannya.
                                </p>

                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                    <a
                                        href="#form-permintaan"
                                        className="group inline-flex min-h-13 items-center justify-center gap-4 bg-white px-6 py-4 text-xs font-extrabold text-[#0756B8] transition hover:bg-[#E8F4FF]"
                                    >
                                        MULAI KONSULTASI
                                        <ArrowRight
                                            size={17}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </a>

                                    <a
                                        href="#layanan"
                                        className="inline-flex min-h-13 items-center justify-center gap-4 border border-white/60 px-6 py-4 text-xs font-extrabold text-white transition hover:bg-white/10"
                                    >
                                        JELAJAHI LAYANAN
                                        <ArrowDown size={16} />
                                    </a>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-white/90">
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-[#C7E7FF]" />
                                        Konsultasi kebutuhan
                                    </span>

                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-[#C7E7FF]" />
                                        Penawaran sebelum produksi
                                    </span>
                                </div>
                            </div>

                            {/* HERO IMAGE */}
                            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
                                <div className="absolute -bottom-5 -left-5 h-32 w-32 bg-[#54B8F2]" />

                                <div className="relative border border-white/40 bg-white/15 p-3 shadow-2xl backdrop-blur-sm sm:p-4">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=85"
                                            alt="Inspirasi apparel dan produksi kreatif"
                                            fetchPriority="high"
                                            className="h-[360px] w-full object-cover sm:h-[470px]"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#073D78]/90 via-transparent to-transparent" />

                                        <div className="absolute right-4 bottom-5 left-4 sm:right-7 sm:bottom-7 sm:left-7">
                                            <p className="text-[9px] font-extrabold tracking-[0.2em] text-[#C7E7FF]">
                                                ONE PRODUCTION · CREATIVE PARTNER
                                            </p>

                                            <h2 className="mt-2 text-2xl leading-tight font-black tracking-tight sm:text-3xl">
                                                Karya yang berkesan.
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 px-1 pt-4 sm:px-2 sm:pt-5">
                                        <p className="text-[10px] font-semibold leading-5 text-white/90 sm:text-xs">
                                            Digital printing, apparel, dan
                                            kebutuhan promosi.
                                        </p>

                                        <a
                                            href="#layanan"
                                            aria-label="Jelajahi layanan"
                                            className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/15 transition hover:bg-white hover:text-[#0756B8]"
                                        >
                                            <ArrowUpRight size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-white/25">
                            <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 py-5 sm:grid-cols-4 sm:px-8 lg:px-12">
                                {[
                                    'DIGITAL PRINTING',
                                    'SABLON KAOS',
                                    'SERAGAM CUSTOM',
                                    'MERCHANDISE',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="border-white/25 py-2 text-center text-[9px] font-extrabold tracking-[0.1em] text-white/90 sm:border-r sm:last:border-r-0 sm:text-[10px]"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* INTRO */}
                    <section
                        id="tentang"
                        className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-28"
                    >
                        <div>
                            <SectionLabel>TENTANG ONE PRODUCTION</SectionLabel>

                            <h2 className="mt-5 text-4xl leading-tight font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                                Bukan sekadar cetak.
                                <span className="block text-[#168BFF]">
                                    Kami bantu ide jadi nyata.
                                </span>
                            </h2>
                        </div>

                        <div className="lg:pt-8">
                            <p className="text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                                One Production hadir sebagai mitra untuk
                                berbagai kebutuhan cetak dan produksi kreatif.
                                Kami membantu bisnis, komunitas, organisasi,
                                dan pelanggan mengembangkan ide menjadi produk
                                yang sesuai dengan tujuan mereka.
                            </p>

                            <p className="mt-5 text-sm leading-7 text-slate-500">
                                Setiap proyek memiliki kebutuhan berbeda.
                                Karena itu, detail bahan, desain, jumlah,
                                anggaran, dan waktu pengerjaan dibahas sejak
                                awal agar proses berjalan lebih jelas.
                            </p>

                            <a
                                href="#form-permintaan"
                                className="mt-7 inline-flex items-center gap-3 text-sm font-extrabold text-[#0756B8] transition hover:text-[#168BFF]"
                            >
                                Diskusikan kebutuhanmu
                                <ArrowRight size={17} />
                            </a>
                        </div>
                    </section>

                    {/* SERVICES */}
                    <section
                        id="layanan"
                        className="bg-[#F1F8FF] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
                    >
                        <div className="mx-auto max-w-[1440px]">
                            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                                <div>
                                    <SectionLabel>LAYANAN KAMI</SectionLabel>

                                    <h2 className="mt-5 max-w-2xl text-4xl leading-tight font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                                        Semua kebutuhan kreatif,
                                        <span className="block text-[#168BFF]">
                                            satu partner.
                                        </span>
                                    </h2>
                                </div>

                                <p className="max-w-md text-sm leading-7 text-slate-600">
                                    Dari kebutuhan promosi hingga produksi
                                    apparel, kami membantu menyesuaikan solusi
                                    dengan kebutuhan setiap proyek.
                                </p>
                            </div>

                            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                                {services.map((service) => {
                                    const Icon = service.icon;

                                    return (
                                        <article
                                            key={service.number}
                                            className="group border border-blue-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#168BFF] hover:shadow-xl hover:shadow-blue-100/80"
                                        >
                                            <div className="relative overflow-hidden">
                                                <img
                                                    src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=800&q=80`}
                                                    alt={service.title}
                                                    loading="lazy"
                                                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                                                />

                                                <span className="absolute top-4 left-4 bg-white px-3 py-2 text-[9px] font-extrabold tracking-[0.13em] text-[#0756B8]">
                                                    {service.tag}
                                                </span>
                                            </div>

                                            <div className="p-6">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs font-extrabold text-[#168BFF]">
                                                        {service.number}
                                                    </span>

                                                    <span className="flex h-10 w-10 items-center justify-center bg-[#E8F4FF] text-[#0756B8] transition group-hover:bg-[#168BFF] group-hover:text-white">
                                                        <Icon size={19} />
                                                    </span>
                                                </div>

                                                <h3 className="mt-5 text-xl font-black tracking-tight">
                                                    {service.title}
                                                </h3>

                                                <p className="mt-3 min-h-20 text-sm leading-7 text-slate-500">
                                                    {service.description}
                                                </p>

                                                <a
                                                    href="#form-permintaan"
                                                    className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-[#0756B8] transition hover:text-[#168BFF]"
                                                >
                                                    Konsultasikan
                                                    <ArrowRight size={15} />
                                                </a>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* PORTFOLIO */}
                    <section
                        id="portofolio"
                        className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
                    >
                        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <div>
                                <SectionLabel>INSPIRASI PROYEK</SectionLabel>

                                <h2 className="mt-5 text-4xl leading-tight font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                                    Ide besar dimulai
                                    <span className="block text-[#168BFF]">
                                        dari detail.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-slate-500">
                                Contoh visual untuk menggambarkan kategori
                                produksi yang bisa dikonsultasikan. Gambar
                                berikut masih berupa placeholder.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-5 md:grid-cols-3">
                            {portfolio.map((item, index) => (
                                <article key={item.title} className="group">
                                    <div className="relative overflow-hidden bg-[#E8F4FF]">
                                        <img
                                            src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=1000&q=85`}
                                            alt={item.title}
                                            loading="lazy"
                                            className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[400px]"
                                        />

                                        <span className="absolute top-4 left-4 bg-white px-3 py-2 text-[10px] font-extrabold text-[#0756B8]">
                                            0{index + 1}
                                        </span>

                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#073D78]/90 to-transparent p-6 pt-20 text-white">
                                            <p className="text-[10px] font-bold tracking-[0.16em] text-[#C7E7FF]">
                                                {item.category}
                                            </p>

                                            <h3 className="mt-2 text-2xl font-black">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* VISION & MISSION */}
                    <section className="bg-[#E8F4FF] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
                        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-20">
                            <div>
                                <SectionLabel>VISI KAMI</SectionLabel>

                                <h2 className="mt-5 text-4xl leading-tight font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                                    Menjadi partner kreatif
                                    <span className="block text-[#168BFF]">
                                        yang bisa diandalkan.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                                    Mengembangkan layanan produksi dan
                                    percetakan yang mengutamakan kualitas,
                                    kreativitas, dan kebutuhan pelanggan.
                                </p>
                            </div>

                            <div className="bg-white p-6 sm:p-9 lg:p-10">
                                <SectionLabel>MISI KAMI</SectionLabel>

                                <div className="mt-7 space-y-5">
                                    {missions.map((mission, index) => (
                                        <div
                                            key={mission}
                                            className="flex gap-4 border-b border-blue-100 pb-5 last:border-0 last:pb-0"
                                        >
                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#E8F4FF] text-xs font-black text-[#0756B8]">
                                                0{index + 1}
                                            </span>

                                            <p className="pt-1 text-sm leading-7 text-slate-600">
                                                {mission}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* BENEFITS */}
                    <section className="bg-[#0756B8] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
                        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
                            <div>
                                <SectionLabel>KENAPA ONE PRODUCTION?</SectionLabel>

                                <h2 className="mt-5 text-4xl leading-tight font-black tracking-[-0.06em] sm:text-5xl">
                                    Partner yang memahami kebutuhanmu.
                                </h2>

                                <p className="mt-5 max-w-lg text-sm leading-7 text-white/80">
                                    Kami percaya proses produksi yang baik
                                    dimulai dari komunikasi yang jelas dan
                                    pemahaman terhadap tujuan setiap proyek.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    'Diskusi kebutuhan sejak awal',
                                    'Penawaran sebelum produksi',
                                    'Pilihan sesuai jenis proyek',
                                    'Komunikasi selama pemesanan',
                                ].map((item, index) => (
                                    <div
                                        key={item}
                                        className="flex gap-4 border border-white/20 bg-white/10 p-5"
                                    >
                                        <CheckCircle2
                                            size={22}
                                            className="shrink-0 text-[#C7E7FF]"
                                        />

                                        <div>
                                            <p className="text-xs font-bold text-white/60">
                                                KEUNGGULAN 0{index + 1}
                                            </p>

                                            <p className="mt-2 text-sm leading-6 font-bold">
                                                {item}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* PROCESS */}
                    <section
                        id="proses"
                        className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
                    >
                        <div className="max-w-3xl">
                            <SectionLabel>ALUR PEMESANAN</SectionLabel>

                            <h2 className="mt-5 text-4xl leading-tight font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                                Proses yang jelas,
                                <span className="block text-[#168BFF]">
                                    dari awal sampai selesai.
                                </span>
                            </h2>
                        </div>

                        <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
                            {processSteps.map((step, index) => (
                                <article
                                    key={step.number}
                                    className="relative border-t-2 border-blue-100 py-7 pr-5 sm:px-5 sm:first:pl-0 lg:py-8"
                                >
                                    <span className="absolute -top-2 h-3 w-3 bg-[#168BFF]" />

                                    <p className="text-xs font-extrabold tracking-[0.18em] text-[#168BFF]">
                                        LANGKAH {step.number}
                                    </p>

                                    <h3 className="mt-5 text-xl font-black">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-500">
                                        {step.description}
                                    </p>

                                    {index < processSteps.length - 1 && (
                                        <ArrowRight
                                            size={18}
                                            className="mt-5 hidden text-[#168BFF] lg:block"
                                        />
                                    )}
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* REQUEST FORM */}
                    <section
                        id="form-permintaan"
                        className="scroll-mt-24 bg-[#F1F8FF] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
                    >
                        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                            <div>
                                <SectionLabel>MULAI PROYEKMU</SectionLabel>

                                <h2 className="mt-5 text-4xl leading-tight font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                                    Punya ide?
                                    <span className="block text-[#168BFF]">
                                        Mari kita bahas.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-lg text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                                    Isi formulir berikut agar tim One
                                    Production bisa memahami kebutuhan awalmu.
                                    Detail produksi dapat dibahas lebih lanjut
                                    setelah permintaan diterima.
                                </p>

                                <div className="mt-8 space-y-5">
                                    <div className="flex items-start gap-4">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#168BFF]">
                                            <MessageCircle size={20} />
                                        </span>

                                        <div>
                                            <p className="text-sm font-extrabold">
                                                Konsultasi kebutuhan
                                            </p>

                                            <p className="mt-1 text-xs leading-6 text-slate-500">
                                                Ceritakan ide dan kebutuhan
                                                produksi yang kamu punya.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#168BFF]">
                                            <PackageCheck size={20} />
                                        </span>

                                        <div>
                                            <p className="text-sm font-extrabold">
                                                Detail sebelum produksi
                                            </p>

                                            <p className="mt-1 text-xs leading-6 text-slate-500">
                                                Jumlah, spesifikasi, dan biaya
                                                dibahas terlebih dahulu.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#168BFF]">
                                            <Truck size={20} />
                                        </span>

                                        <div>
                                            <p className="text-sm font-extrabold">
                                                Rencana pengerjaan
                                            </p>

                                            <p className="mt-1 text-xs leading-6 text-slate-500">
                                                Waktu pengerjaan disesuaikan
                                                dengan kesepakatan proyek.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-5 shadow-xl shadow-blue-100/70 sm:p-8 lg:p-10">
                                {submitted && (
                                    <div
                                        role="status"
                                        className="mb-6 flex items-start gap-3 border border-green-200 bg-green-50 p-4 text-sm text-green-800"
                                    >
                                        <CheckCircle2
                                            size={20}
                                            className="shrink-0"
                                        />

                                        <p>
                                            Permintaan berhasil dikirim.
                                            Terima kasih sudah menghubungi One
                                            Production!
                                        </p>
                                    </div>
                                )}

                                <div className="mb-7">
                                    <p className="text-[10px] font-extrabold tracking-[0.2em] text-[#168BFF]">
                                        FORM PERMINTAAN
                                    </p>

                                    <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                                        Ceritakan kebutuhanmu.
                                    </h3>

                                    <p className="mt-2 text-xs leading-6 text-slate-500">
                                        Isi kolom bertanda bintang agar
                                        permintaan bisa diproses.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <label className="block">
                                            <span className="mb-2 block text-xs font-bold">
                                                Nama lengkap{' '}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </span>

                                            <input
                                                name="name"
                                                value={form.data.name}
                                                onChange={(event) =>
                                                    form.setData(
                                                        'name',
                                                        event.target.value,
                                                    )
                                                }
                                                autoComplete="name"
                                                required
                                                maxLength={255}
                                                placeholder="Masukkan nama"
                                                className="w-full border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/10"
                                            />

                                            {form.errors.name && (
                                                <span className="mt-2 block text-xs text-red-600">
                                                    {form.errors.name}
                                                </span>
                                            )}
                                        </label>

                                        <label className="block">
                                            <span className="mb-2 block text-xs font-bold">
                                                Nomor kontak{' '}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </span>

                                            <input
                                                name="contact"
                                                value={form.data.contact}
                                                onChange={(event) =>
                                                    form.setData(
                                                        'contact',
                                                        event.target.value,
                                                    )
                                                }
                                                autoComplete="tel"
                                                required
                                                maxLength={30}
                                                placeholder="Nomor WhatsApp aktif"
                                                className="w-full border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/10"
                                            />

                                            {form.errors.contact && (
                                                <span className="mt-2 block text-xs text-red-600">
                                                    {form.errors.contact}
                                                </span>
                                            )}
                                        </label>

                                        <label className="block">
                                            <span className="mb-2 block text-xs font-bold">
                                                Jenis produksi{' '}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </span>

                                            <select
                                                name="production_type"
                                                value={form.data.production_type}
                                                onChange={(event) =>
                                                    form.setData(
                                                        'production_type',
                                                        event.target.value,
                                                    )
                                                }
                                                required
                                                className="w-full border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/10"
                                            >
                                                <option value="">
                                                    Pilih kebutuhan
                                                </option>
                                                <option value="Kaos">
                                                    Sablon kaos
                                                </option>
                                                <option value="Kemeja">
                                                    Kemeja
                                                </option>
                                                <option value="Jaket">
                                                    Jaket
                                                </option>
                                                <option value="Seragam">
                                                    Seragam
                                                </option>
                                                <option value="Hoodie">
                                                    Hoodie
                                                </option>
                                                <option value="Lainnya">
                                                    Digital printing /
                                                    merchandise / lainnya
                                                </option>
                                            </select>

                                            {form.errors.production_type && (
                                                <span className="mt-2 block text-xs text-red-600">
                                                    {form.errors.production_type}
                                                </span>
                                            )}
                                        </label>

                                        <label className="block">
                                            <span className="mb-2 block text-xs font-bold">
                                                Perkiraan jumlah{' '}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </span>

                                            <input
                                                name="quantity"
                                                type="number"
                                                min="1"
                                                max="100000"
                                                value={form.data.quantity}
                                                onChange={(event) =>
                                                    form.setData(
                                                        'quantity',
                                                        event.target.value,
                                                    )
                                                }
                                                required
                                                inputMode="numeric"
                                                placeholder="Contoh: 100"
                                                className="w-full border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/10"
                                            />

                                            {form.errors.quantity && (
                                                <span className="mt-2 block text-xs text-red-600">
                                                    {form.errors.quantity}
                                                </span>
                                            )}
                                        </label>

                                        <label className="block sm:col-span-2">
                                            <span className="mb-2 block text-xs font-bold">
                                                Detail kebutuhan{' '}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </span>

                                            <textarea
                                                name="details"
                                                rows={5}
                                                value={form.data.details}
                                                onChange={(event) =>
                                                    form.setData(
                                                        'details',
                                                        event.target.value,
                                                    )
                                                }
                                                required
                                                maxLength={5000}
                                                placeholder="Ceritakan bahan, warna, desain, ukuran, target waktu, atau detail lain yang diperlukan."
                                                className="w-full resize-y border border-slate-200 bg-white px-4 py-3.5 text-sm leading-7 outline-none transition placeholder:text-slate-400 focus:border-[#168BFF] focus:ring-2 focus:ring-[#168BFF]/10"
                                            />

                                            {form.errors.details && (
                                                <span className="mt-2 block text-xs text-red-600">
                                                    {form.errors.details}
                                                </span>
                                            )}
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={form.processing}
                                        className="group mt-6 flex min-h-13 w-full items-center justify-center gap-3 bg-[#168BFF] px-6 py-4 text-xs font-extrabold text-white transition hover:bg-[#0756B8] disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {form.processing
                                            ? 'MENGIRIM PERMINTAAN...'
                                            : 'KIRIM PERMINTAAN'}

                                        {!form.processing && (
                                            <ArrowRight
                                                size={17}
                                                className="transition-transform group-hover:translate-x-1"
                                            />
                                        )}
                                    </button>

                                    <p className="mt-4 text-center text-[10px] leading-5 text-slate-400">
                                        Informasi yang kamu kirim digunakan
                                        untuk menindaklanjuti permintaan
                                        produksi.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
                        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
                            <div>
                                <SectionLabel>PERTANYAAN UMUM</SectionLabel>

                                <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] sm:text-5xl">
                                    Sebelum mulai.
                                </h2>

                                <p className="mt-5 text-sm leading-7 text-slate-500">
                                    Beberapa hal yang perlu diketahui sebelum
                                    mengajukan permintaan produksi.
                                </p>
                            </div>

                            <div className="divide-y divide-blue-100">
                                <details className="group py-5" open>
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold">
                                        Layanan apa saja yang tersedia?
                                        <ArrowDown
                                            size={18}
                                            className="shrink-0 text-[#168BFF] transition group-open:rotate-180"
                                        />
                                    </summary>

                                    <p className="mt-4 text-sm leading-7 text-slate-500">
                                        One Production melayani kebutuhan
                                        digital printing, sablon kaos,
                                        seragam custom, dan merchandise.
                                        Detail kebutuhan dibahas saat
                                        konsultasi.
                                    </p>
                                </details>

                                <details className="group py-5">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold">
                                        Bagaimana cara mengetahui harga?
                                        <ArrowDown
                                            size={18}
                                            className="shrink-0 text-[#168BFF] transition group-open:rotate-180"
                                        />
                                    </summary>

                                    <p className="mt-4 text-sm leading-7 text-slate-500">
                                        Estimasi harga disesuaikan dengan
                                        jenis produk, bahan, spesifikasi,
                                        jumlah, dan kebutuhan proyek. Detail
                                        penawaran perlu dikonfirmasi sebelum
                                        produksi.
                                    </p>
                                </details>

                                <details className="group py-5">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold">
                                        Apakah harus punya desain final?
                                        <ArrowDown
                                            size={18}
                                            className="shrink-0 text-[#168BFF] transition group-open:rotate-180"
                                        />
                                    </summary>

                                    <p className="mt-4 text-sm leading-7 text-slate-500">
                                        Kamu bisa memulai dengan ide atau
                                        referensi yang sudah dimiliki.
                                        Kebutuhan desain dan detail produksi
                                        dapat dibahas saat konsultasi.
                                    </p>
                                </details>

                                <details className="group py-5">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold">
                                        Bagaimana proses pemesanannya?
                                        <ArrowDown
                                            size={18}
                                            className="shrink-0 text-[#168BFF] transition group-open:rotate-180"
                                        />
                                    </summary>

                                    <p className="mt-4 text-sm leading-7 text-slate-500">
                                        Proses dimulai dari konsultasi,
                                        pembahasan spesifikasi dan penawaran,
                                        persetujuan pesanan, lalu produksi
                                        sesuai kesepakatan.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </section>

                    {/* FINAL CTA */}
                    <section className="bg-gradient-to-r from-[#168BFF] to-[#0756B8] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
                        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 md:flex-row md:items-center">
                            <div>
                                <p className="flex items-center gap-2 text-[10px] font-extrabold tracking-[0.2em] text-white/80">
                                    <Sparkles size={16} />
                                    SIAP MEWUJUDKAN IDEMU?
                                </p>

                                <h2 className="mt-4 max-w-3xl text-4xl leading-tight font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                                    Mari buat sesuatu yang berkesan.
                                </h2>
                            </div>

                            <a
                                href="#form-permintaan"
                                className="group inline-flex min-h-13 shrink-0 items-center justify-center gap-4 self-start bg-white px-6 py-4 text-xs font-extrabold text-[#0756B8] transition hover:bg-[#E8F4FF] md:self-center"
                            >
                                MULAI KONSULTASI
                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>
                        </div>
                    </section>
                </main>

                {/* FOOTER */}
                <footer className="bg-[#063B70] px-5 py-10 text-white sm:px-8 lg:px-12">
                    <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-3 md:items-center">
                        <div>
                            <p className="text-lg font-black tracking-[-0.05em]">
                                ONE
                                <span className="text-[#54B8F2]">.</span>
                                PRODUCTION
                            </p>

                            <p className="mt-2 max-w-xs text-xs leading-6 text-white/65">
                                Mitra digital printing, sablon, apparel, dan
                                merchandise.
                            </p>
                        </div>

                        <nav className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-white/80">
                            <Link
                                href="/"
                                className="transition hover:text-[#C7E7FF]"
                            >
                                BetawiBoys
                            </Link>

                            <a
                                href="#layanan"
                                className="transition hover:text-[#C7E7FF]"
                            >
                                Layanan
                            </a>

                            <a
                                href="#portofolio"
                                className="transition hover:text-[#C7E7FF]"
                            >
                                Portofolio
                            </a>

                            <a
                                href="#form-permintaan"
                                className="transition hover:text-[#C7E7FF]"
                            >
                                Konsultasi
                            </a>
                        </nav>

                        <div className="md:text-right">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-xs font-bold text-[#C7E7FF] transition hover:text-white"
                            >
                                <ArrowLeft size={15} />
                                Kembali ke website utama
                            </Link>

                            <p className="mt-4 text-[10px] text-white/50">
                                © {new Date().getFullYear()} One Production.
                                All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}