import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    BookOpen,
} from 'lucide-react';

type Article = {
    number: string;
    category: string;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    reading_time: string;
    published_at: string;
};

type EducationIndexProps = {
    articles: Article[];
};

export default function EducationIndex({
    articles,
}: EducationIndexProps) {
    return (
        <>
            <Head title="Edukasi Betawi — BetawiBoys">
                <meta
                    name="description"
                    content="Jelajahi cerita tentang sejarah, kesenian, tradisi, dan kuliner Betawi bersama BetawiBoys."
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
                            href="/"
                            className="flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] transition-colors hover:text-[#d71920] sm:text-xs"
                        >
                            <ArrowLeft size={15} />
                            KEMBALI KE BERANDA
                        </Link>
                    </div>
                </header>

                <main>
                    {/* Hero */}
                    <section className="relative overflow-hidden bg-[#111111] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32">
                        <div className="absolute top-0 right-0 h-full w-1/3 bg-[#d71920] opacity-10" />

                        <div className="relative mx-auto max-w-[1400px]">
                            <div className="mb-7 flex items-center gap-3">
                                <BookOpen
                                    size={17}
                                    className="text-[#e52b31]"
                                />

                                <p className="text-[10px] font-bold tracking-[0.3em] text-white/60">
                                    BETAWIBOYS CULTURE JOURNAL
                                </p>
                            </div>

                            <h1 className="max-w-5xl text-5xl leading-[0.88] font-black tracking-[-0.08em] sm:text-7xl lg:text-9xl">
                                EDUKASI
                                <br />
                                <span className="text-[#d71920]">
                                    BETAWI.
                                </span>
                            </h1>

                            <div className="mt-9 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                                <p className="max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                                    Setiap budaya punya cerita. Kenali lebih
                                    dekat sejarah, kesenian, tradisi, dan
                                    kuliner Betawi melalui artikel yang
                                    menghubungkan warisan masa lalu dengan
                                    generasi masa kini.
                                </p>

                                <p className="text-[10px] font-bold tracking-[0.2em] text-white/50">
                                    KENALI AKARMU. HIDUPKAN BUDAYA.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Article list */}
                    <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
                        <div className="mb-10 flex items-end justify-between gap-4 border-b border-black/15 pb-5">
                            <div>
                                <p className="mb-3 text-[10px] font-bold tracking-[0.25em] text-[#d71920]">
                                    JELAJAHI CERITA
                                </p>

                                <h2 className="text-3xl font-black tracking-[-0.06em] sm:text-4xl">
                                    Semua Artikel
                                </h2>
                            </div>

                            <p className="text-xs text-black/50">
                                {articles.length} artikel
                            </p>
                        </div>

                        {articles.length > 0 ? (
                            <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                                {articles.map((article) => (
                                    <article
                                        key={article.slug}
                                        className="group"
                                    >
                                        <Link
                                            href={`/edukasi-betawi/${article.slug}`}
                                            className="block"
                                        >
                                            <div className="relative aspect-[5/4] overflow-hidden bg-[#e7e3dc]">
                                                <img
                                                    src={article.image}
                                                    alt={article.title}
                                                    loading="lazy"
                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />

                                                <span className="absolute top-4 left-4 bg-[#f5f3ee] px-3 py-2 text-[9px] font-bold tracking-[0.15em]">
                                                    {article.category}
                                                </span>

                                                <span className="absolute right-4 bottom-4 flex h-11 w-11 items-center justify-center bg-[#f5f3ee] transition-colors group-hover:bg-[#d71920] group-hover:text-white">
                                                    <ArrowUpRight size={20} />
                                                </span>
                                            </div>

                                            <div className="pt-5">
                                                <div className="mb-4 flex items-center gap-3 text-[9px] font-bold tracking-[0.12em] text-black/45">
                                                    <span>
                                                        {article.published_at}
                                                    </span>

                                                    <span>·</span>

                                                    <span>
                                                        {article.reading_time}
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl leading-tight font-black tracking-[-0.045em] transition-colors group-hover:text-[#d71920]">
                                                    {article.title}
                                                </h3>

                                                <p className="mt-4 text-sm leading-7 text-black/60">
                                                    {article.excerpt}
                                                </p>

                                                <div className="mt-6 flex items-center justify-between border-b border-black/15 pb-4">
                                                    <span className="text-[9px] font-bold tracking-[0.18em]">
                                                        BACA ARTIKEL
                                                    </span>

                                                    <ArrowRight
                                                        size={17}
                                                        className="transition-transform group-hover:translate-x-1"
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center">
                                <h3 className="text-2xl font-black">
                                    Belum ada artikel.
                                </h3>

                                <p className="mt-3 text-sm text-black/55">
                                    Artikel edukasi akan segera hadir.
                                </p>
                            </div>
                        )}
                    </section>

                    {/* CTA */}
                    <section className="bg-[#d71920] px-5 py-16 text-white sm:px-8 lg:px-12">
                        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-7 md:flex-row md:items-center">
                            <div>
                                <p className="mb-4 text-[10px] font-bold tracking-[0.25em] text-white/70">
                                    BUDAYA ADALAH IDENTITAS
                                </p>

                                <h2 className="text-4xl leading-[0.95] font-black tracking-[-0.07em] sm:text-6xl">
                                    BANGGA PADA
                                    <br />
                                    AKARMU.
                                </h2>
                            </div>

                            <Link
                                href="/"
                                className="group inline-flex min-h-12 w-fit items-center gap-5 bg-white px-6 text-[10px] font-bold tracking-[0.15em] text-black transition-colors hover:bg-black hover:text-white"
                            >
                                KEMBALI KE BERANDA
                                <ArrowRight
                                    size={17}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </section>
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
                            BETAWIBOYS — ROOTED IN BUDAYA.
                        </Link>
                    </div>
                </footer>
            </div>
        </>
    );
}