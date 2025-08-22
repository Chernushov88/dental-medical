<template>
    <SectionComponent class="py-16 lg:py-12">
        <div class="flex items-end justify-between">
            <div class="max-w-[455px]">
                <SectionHeadingComponent>
                    <MarkedWord>
                        News & Articles
                    </MarkedWord>
                </SectionHeadingComponent>

                <DescriptionWrapperComponent class="!mb-0">
                    We use only the best quality materials on the market in order to provide the best products to our patients.
                </DescriptionWrapperComponent>
            </div>

            <ButtonComponent class="hidden lg:block">View All</ButtonComponent>
        </div>

        <div class="mt-12 mb-10 lg:mt-16 lg:mb-12">
            cards
        </div>

        <div class="lg:flex justify-center hidden">
            <ButtonComponent>Check out more</ButtonComponent>
        </div>

        <SliderArrowsComponent
            dark-mode
            class="lg:hidden"
        />
    </SectionComponent>
</template>