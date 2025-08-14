<template>
    <Section class="pt-8 lg:pt-16 pb-24 lg:pb-28">
        <SectionHeadingComponent class="lg:w-1/2 lg:text-center lg:mx-auto">
            We’re <MarkedWordComponent>welcoming</MarkedWordComponent> new patients and can’t wait to meet you.
        </SectionHeadingComponent>

        <DescriptionWrapperComponent class="!mb-12 lg:w-[35%] lg:text-center lg:mx-auto">
            We use only the best quality materials on the market in order to provide the best products to our patients.
        </DescriptionWrapperComponent>

        <div class="mx-auto rounded-2lg overflow-hidden w-full lg:w-3/4 aspect-square lg:aspect-video mb-12 lg:mb-10">
            <img
                :src="'/pages/home/videoPrevie.png'"
                alt="Video preview"
                class="h-full w-full object-cover object-center"
            >
        </div>

        <ButtonComponent class="mx-auto block">Watch Playlist</ButtonComponent>
    </Section>
</template>