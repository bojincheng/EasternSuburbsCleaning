import React from "react";
import { Link } from "expo-router";
import {
    View,
    Text,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    ImageBackground,
    TextInput,
} from "react-native";

/**
 * Local images (bundled) — more reliable than remote URLs for RN Web/native.
 * Replace file names as you need; the relative path is based on this file location.
 */
const heroBg = require("../../assets/images/Main.png");
const aboutImg = require("../../assets/images/about.png");
const serviceImg1 = require("../../assets/images/Service_2.png");
const serviceImg2 = require("../../assets/images/Service_3.png");
const serviceImg3 = require("../../assets/images/Service_4.png");
const serviceImg4 = require("../../assets/images/Service_1.png");
const ctaImg = require("../../assets/images/cta.png");
const contactBg = require("../../assets/images/Footer.png");

/** Top strip (mini header with hours + CTA) */
function TopStrip() {
    return (
        <View style={styles.topStrip}>
            <Text style={styles.topStripText}>Mon–Fri • 9AM–5PM</Text>
            <Link href="/login" asChild>
                <Pressable style={styles.stripBtn} accessibilityRole="button">
                    <Text style={styles.stripBtnText}>Get Quote</Text>
                </Pressable>
            </Link>
        </View>
    );
}

/** Minimal navbar (logo + brand + actions) */
function Navbar() {
    return (
        <View style={styles.nav}>
            <View style={styles.navLeft}>
                <Image
                    source={require("../../assets/images/Logo.png")}
                    style={{ width: 32, height: 32, marginRight: 8 }}
                    resizeMode="contain"
                    accessible
                    accessibilityLabel="DongJiao Clean logo"
                />
                <Text style={styles.brand}>DongJiao Clean</Text>
            </View>

            <View style={styles.navRight}>
                <Link href="/" asChild>
                    <Pressable style={styles.navBtn} accessibilityRole="link">
                        <Text style={styles.navText}>Home</Text>
                    </Pressable>
                </Link>
                <Link href="/login" asChild>
                    <Pressable style={styles.navPrimary} accessibilityRole="button">
                        <Text style={styles.navPrimaryText}>Sign in</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}

/**
 * Hero section
 * - Use ImageBackground with `cover` to avoid distortion.
 * - You can nudge the image vertically by adding `transform: [{ translateY: N }]` to `heroImage`.
 */
function Hero() {
    return (
        <ImageBackground
            source={heroBg}
            style={styles.heroBg}
            imageStyle={styles.heroImage}
        >
            <View style={styles.heroOverlay} />
            <View style={styles.heroInner}>
                <Text style={styles.heroEyebrow}>with DongJiao Commercial Cleaners</Text>
                <Text style={styles.heroTitle}>GET CLEANED</Text>
                <Link href="/login" asChild>
                    <Pressable style={styles.primaryBtn} accessibilityRole="button">
                        <Text style={styles.primaryBtnText}>Get Instant Quote now</Text>
                    </Pressable>
                </Link>
            </View>
        </ImageBackground>
    );
}

/** About section (image + copy) */
function About() {
    return (
        <View style={styles.section}>
            <View style={styles.wrap}>
                <View style={styles.row}>
                    <Image source={aboutImg} style={styles.aboutImg} resizeMode="cover" />
                    <View style={styles.aboutTextBox}>
                        <Text style={styles.h2}>
                            Know Something{"\n"}About Our Company
                        </Text>
                        <Text style={styles.p}>
                            DongJiao Clean is a modern cleaning service designed to fit your
                            experience. Just upload photos, share your cleaning needs, and our
                            team takes care of the rest. With fast quotes, eco-friendly
                            practices, and a focus on quality, we’re committed to making home
                            cleaning reliable, efficient, and accessible to every customer.
                        </Text>
                        <View style={[styles.cardLite, styles.cardLiteYellow]}>
                            <Text style={styles.h4}>Mission Statement</Text>
                            <Text style={styles.pSmall}>
                                Our mission is to provide accessible, eco-conscious, and
                                high-quality cleaning services that save time and offer peace of
                                mind—for every customer, every time.
                            </Text>
                            <Pressable style={styles.linkBtn} accessibilityRole="button">
                                <Text style={styles.linkBtnText}>Read More</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

/**
 * Services grid (4 cards)
 * - Responsive using flexWrap; two columns on wide, one on narrow screens.
 * - Each card uses `overflow: hidden` to clip image corners to the card radius.
 */
function Services() {
    const items = [
        {
            title: "Window Cleaning",
            desc:
                "Bring natural light back into your spaces with streak-free, spotless windows.",
            img: serviceImg1,
        },
        {
            title: "General Cleaning",
            desc:
                "Dust and dirt don’t stand a chance. We keep your place fresh and allergen-free.",
            img: serviceImg2,
        },
        {
            title: "Bathroom Cleaning",
            desc:
                "Shine every corner—from mirrors to tiles—with deep sanitation and care.",
            img: serviceImg3,
        },
        {
            title: "Carpet Cleaning",
            desc:
                "Powerful, fabric-safe process lifts stains and odours, giving carpets a second life.",
            img: serviceImg4,
        },
    ];

    return (
        <View style={styles.sectionAlt}>
            <View style={styles.wrap}>
                <Text style={[styles.h2, { textAlign: "center", marginBottom: 16 }]}>
                    DongJiao Cleaning Services
                </Text>
                <Text style={[styles.p, { textAlign: "center", marginBottom: 20 }]}>
                    We offer tailored cleaning solutions to match your lifestyle: from
                    deep cleaning to detail-focused touch-ups—designed for comfort, speed,
                    and reliability.
                </Text>

                <View style={styles.cardRowWrap}>
                    {items.map((it, idx) => (
                        <View key={idx} style={styles.serviceCard} accessible>
                            <Image
                                source={it.img}
                                style={styles.serviceImg}
                                resizeMode="cover"
                            />
                            <View style={{ padding: 12 }}>
                                <Text style={styles.cardTitle}>{it.title}</Text>
                                <Text style={styles.cardDesc}>{it.desc}</Text>
                                <Pressable
                                    style={styles.circleBtn}
                                    accessibilityRole="button"
                                    accessibilityLabel={`Learn more about ${it.title}`}
                                >
                                    <Text style={{ color: "#184434", fontWeight: "800" }}>›</Text>
                                </Pressable>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

/**
 * Steps (01 → 02 → 03)
 * - Uses absolute line between steps. If you want perfect alignment on all widths,
 *   consider computing the line width from container measurement later.
 */
function QuoteSteps() {
    return (
        <View style={styles.section}>
            <View style={styles.wrap}>
                <Text style={[styles.h2, { textAlign: "center" }]}>
                    Get a Quote is Easy
                </Text>
                <Text
                    style={[
                        styles.pSmall,
                        { textAlign: "center", marginBottom: 20, fontWeight: "700" },
                    ]}
                >
                    No visits. No hassle. Fast, Remote, Contact-Free
                </Text>

                <View style={styles.stepsRow}>
                    {["Submit a few details.", "Send us a few photos.", "Get a quote!"].map(
                        (label, i) => (
                            <View key={i} style={styles.stepItem}>
                                <View style={styles.stepCircle}>
                                    <Text style={styles.stepNum}>{`0${i + 1}`}</Text>
                                </View>

                                {i < 2 && <View style={styles.stepLine} />}
                                <Text style={styles.stepLabel}>{label}</Text>
                            </View>
                        )
                    )}
                </View>
            </View>
        </View>
    );
}

/** CTA (copy + image) */
function CTA() {
    return (
        <View style={styles.section}>
            <View style={styles.wrap}>
                <View style={styles.row}>
                    <View style={styles.ctaTextBox}>
                        <Text style={styles.h2}>
                            Fast & Reliable Cleaning{"\n"}with DongJiao Modern Commercial
                            Cleaning
                        </Text>
                        <Text style={styles.p}>
                            At DongJiao Clean, we believe home and office cleaning should be
                            simple, flexible, and contact-free. With just a few photos and
                            simple instructions, we’ll send you a fast, accurate quote—no
                            on-site inspection needed. Whether you need regular cleaning or a
                            one-time service, our professional team delivers spotless results
                            with care and precision.
                        </Text>
                        <Text style={[styles.p, { fontWeight: "700", marginTop: 6 }]}>
                            Call us today at:  +61-490-037-815
                        </Text>
                    </View>
                    <Image source={ctaImg} style={styles.ctaImg} resizeMode="cover" />
                </View>
            </View>
        </View>
    );
}

/**
 * Contact section with a background image.
 * - `position: 'relative'` on container + an absolute tint ensures full coverage.
 * - `zIndex` keeps form above the tint.
 */
function ContactSection() {
    return (
        <ImageBackground
            source={contactBg}
            style={styles.contactBg}
            imageStyle={styles.contactBgImage}
        >
            <View style={styles.contactBgTint} />
            <View style={[styles.wrap, styles.contactInner, { paddingVertical: 28 }]}>
                <View style={styles.contactCard}>
                    <Text style={[styles.h2, { color: "#0f3d2e", marginBottom: 12 }]}>
                        Contact Section
                    </Text>
                    <Text style={[styles.pSmall, { marginBottom: 12, fontWeight: "600" }]}>
                        Please enter your details and get in touch!
                    </Text>

                    {/* Two-column layout; wraps on small screens */}
                    <View style={styles.cardRowWrap}>
                        <View style={styles.inputBoxHalf}>
                            <Text style={styles.inputLabel}>First Name</Text>
                            <TextInput
                                placeholder="Jane"
                                placeholderTextColor="#9CA3AF"
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputBoxHalf}>
                            <Text style={styles.inputLabel}>Last Name</Text>
                            <TextInput
                                placeholder="Doe"
                                placeholderTextColor="#9CA3AF"
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputBoxFull}>
                            <Text style={styles.inputLabel}>Email Address</Text>
                            <TextInput
                                placeholder="jane@example.com"
                                keyboardType="email-address"
                                placeholderTextColor="#9CA3AF"
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputBoxFull}>
                            <Text style={styles.inputLabel}>Message</Text>
                            <TextInput
                                placeholder="Tell us about your place…"
                                multiline
                                numberOfLines={4}
                                placeholderTextColor="#9CA3AF"
                                style={[styles.input, { height: 120, textAlignVertical: "top" }]}
                            />
                        </View>
                    </View>

                    <Pressable
                        style={[styles.primaryBtn, { alignSelf: "flex-end" }]}
                        accessibilityRole="button"
                    >
                        <Text style={styles.primaryBtnText}>Submit</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
}

/** Footer links + copyright */
function Footer() {
    return (
        <View style={styles.footer}>
            <View style={styles.wrap}>
                <View style={styles.footerCols}>
                    <View style={styles.footerCol}>
                        <Text style={styles.footerTitle}>Links</Text>
                        <Text style={styles.footerLink}>About us</Text>
                        <Text style={styles.footerLink}>Categories</Text>
                        <Text style={styles.footerLink}>Services List</Text>
                    </View>
                    <View style={styles.footerCol}>
                        <Text style={styles.footerTitle}>Account</Text>
                        <Text style={styles.footerLink}>Login</Text>
                        <Text style={styles.footerLink}>Register</Text>
                    </View>
                    <View style={styles.footerCol}>
                        <Text style={styles.footerTitle}>Legal</Text>
                        <Text style={styles.footerLink}>Terms & conditions</Text>
                        <Text style={styles.footerLink}>Privacy policy</Text>
                    </View>
                    <View style={styles.footerCol}>
                        <Text style={styles.footerTitle}>Social</Text>
                        <Text style={styles.footerLink}>Instagram</Text>
                        <Text style={styles.footerLink}>Facebook</Text>
                        <Text style={styles.footerLink}>Twitter</Text>
                    </View>
                </View>

                <Text style={styles.footerCopy}>
                    © 2025 DongJiao Clean. All Rights Reserved.
                </Text>
            </View>
        </View>
    );
}

/** Page composition */
export default function LandingPage() {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 0, backgroundColor: "#fff" }}>
            <TopStrip />
            <Navbar />
            <Hero />
            <About />
            <Services />
            <QuoteSteps />
            <CTA />
            <ContactSection />
            <Footer />
        </ScrollView>
    );
}

/** Styles — RN Web friendly (no CSS grid / gap) */
const styles = StyleSheet.create({
    // wrappers / layout helpers
    wrap: { maxWidth: 1080, width: "100%", alignSelf: "center", paddingHorizontal: 16 },
    row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" },

    // top strip
    topStrip: {
        height: 36,
        backgroundColor: "#0f3d2e",
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    topStripText: { color: "#e4efe9", fontSize: 12, fontWeight: "700" },
    stripBtn: { backgroundColor: "#c9a77b", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8 },
    stripBtnText: { color: "#1b1b1b", fontWeight: "700", fontSize: 12 },

    // navbar
    nav: {
        height: 56,
        backgroundColor: "#fff",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#e5e7eb",
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    navLeft: { flexDirection: "row", alignItems: "center" },
    brand: { fontSize: 18, fontWeight: "800", color: "#184434" },
    navRight: { flexDirection: "row", alignItems: "center" },
    navBtn: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8, marginLeft: 6 },
    navText: { color: "#184434", fontSize: 14, fontWeight: "700" },
    navPrimary: { backgroundColor: "#184434", paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10, marginLeft: 8 },
    navPrimaryText: { color: "#fff", fontWeight: "800" },

    // hero
    heroBg: { height: 610, justifyContent: "center" },
    heroImage: { resizeMode: "cover" },
    heroOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.35)" }, // readability
    heroInner: { alignItems: "center", justifyContent: "center" },
    heroEyebrow: { color: "#eaf4ef", marginBottom: 6 },
    heroTitle: { fontSize: 42, fontWeight: "900", color: "#fff", letterSpacing: 1.5, marginBottom: 14 },

    // primary CTA button
    primaryBtn: {
        backgroundColor: "#c9a77b",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
        alignSelf: "center",
    },
    primaryBtnText: { color: "#1b1b1b", fontWeight: "700" },

    // sections
    section: { paddingVertical: 28 },
    sectionAlt: { paddingVertical: 28, backgroundColor: "#f7faf9" },
    h2: { fontSize: 22, fontWeight: "800", color: "#184434", marginBottom: 8 },
    h4: { fontSize: 16, fontWeight: "800", color: "#184434", marginBottom: 6 },
    p: { color: "#333", lineHeight: 20 },
    pSmall: { color: "#4b5563", fontSize: 12, lineHeight: 18 },

    cardLiteYellow: {
        backgroundColor: "rgba(17, 68, 53, 0.25)",
    },

    // about
    aboutImg: { width: 360, height: 260, borderRadius: 14, marginRight: 16, marginBottom: 12, flexGrow: 1 },
    aboutTextBox: { flex: 1, minWidth: 280 },
    cardLite: {
        marginTop: 12,
        backgroundColor: "#ffffff",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#e5e7eb",
        borderRadius: 12,
        padding: 12,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
    linkBtn: { marginTop: 8, alignSelf: "flex-start", paddingVertical: 6, paddingHorizontal: 8 },
    linkBtnText: { color: "#0f766e", fontWeight: "700" },

    // services grid
    cardRowWrap: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
    serviceCard: {
        backgroundColor: "#fff",
        borderRadius: 12,
        overflow: "hidden",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#e5e7eb",
        marginBottom: 14,
        flexBasis: "48%",
        maxWidth: "48%",
    },
    serviceImg: { width: "100%", height: 220 },
    cardTitle: { fontSize: 16, fontWeight: "800", color: "#184434", marginBottom: 6 },
    cardDesc: { color: "#374151", fontSize: 12, lineHeight: 18, marginBottom: 8, fontWeight: "400" },
    circleBtn: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#184434",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
    },

    // steps
    stepsRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    stepItem: { flex: 1, alignItems: "center", position: "relative" },
    stepCircle: {
        width: 82,
        height: 82,
        borderRadius: 41,
        borderWidth: 3,
        borderColor: "#c9a77b",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    stepNum: { fontSize: 22, fontWeight: "900", color: "#825b34" },
    stepLine: { position: "absolute", top: 41, right: -104, width: "60%", height: 2, backgroundColor: "#d9c2a6" },
    stepLabel: { marginTop: 10, fontSize: 12, fontWeight: "600", color: "#374151", textAlign: "center", maxWidth: 160 },

    // CTA
    ctaTextBox: { flex: 1, minWidth: 260, paddingRight: 12 },
    ctaImg: { width: 360, height: 220, borderRadius: 14, marginTop: 12, flexGrow: 1 },

    // contact
    contactBg: {
        minHeight: 420,
        justifyContent: "center",
        paddingVertical: 0,
        position: "relative",
    },
    contactBgImage: {
        maxHeight: 523,
        resizeMode: "cover",
    },
    contactBgTint: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(17, 68, 53, 0.35)",
        zIndex: 1,
        pointerEvents: "none",
    },
    contactInner: { zIndex: 2 },
    contactCard: {
        backgroundColor: "rgba(230, 240, 236, 0.65)",
        borderRadius: 16,
        padding: 16,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#b7d0c5",
    },
    inputBoxHalf: { flexBasis: "48%", maxWidth: "48%", marginBottom: 10 },
    inputBoxFull: { flexBasis: "100%", maxWidth: "100%", marginBottom: 10 },
    inputLabel: { fontSize: 12, color: "#184434", marginBottom: 6, fontWeight: "700" },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#d1d5db",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontWeight: "600",
    },

    // footer
    footer: { paddingVertical: 28, backgroundColor: "#114435", marginTop: 0, marginBottom: 0 },
    footerCols: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
    footerCol: { flexBasis: "23%", maxWidth: "23%", marginBottom: 16 },
    footerTitle: { color: "#eaf4ef", fontWeight: "800", marginBottom: 8 },
    footerLink: { color: "#cfe1d9", marginBottom: 4 },
    footerCopy: { textAlign: "center", color: "#cfe1d9", paddingTop: 6 },
});
