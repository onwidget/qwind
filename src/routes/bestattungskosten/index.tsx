import { component$ } from "@builder.io/qwik";
import BenefitsBestattungskosten from "~/components/widgets/BenefitsBestattungskosten";
import CTA from "~/components/widgets/CTA";
import ContentKosten from "~/components/widgets/ContentKosten";
import HeroKosten from "~/components/widgets/HeroKosten";
import Stats from "~/components/widgets/Stats";

export default component$(() => {
    return (
        <>
            <HeroKosten />
            <ContentKosten />
            <BenefitsBestattungskosten />
            <Stats />
            <CTA />
        </>
    )
});