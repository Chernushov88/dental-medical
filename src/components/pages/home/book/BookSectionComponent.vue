<template>
    <SectionComponent class="pt-24 pb-17.5 flex flex-col gap-12 lg:flex-row lg:items-end lg:gap-40 lg:!px-17.5">
        <div>
            <SectionHeadingComponent>   
                Leave your worries at the door and enjoy a 
                <MarkedWordComponent class="lg:hidden">healthier</MarkedWordComponent>
                <span class="hidden lg:inline-block">healthier</span>, more 
                <MarkedWordComponent class="hidden lg:inline-block">precise smile</MarkedWordComponent>
                <span class="lg:hidden">precise smile</span>
            </SectionHeadingComponent>

            <DescriptionWrapperComponent>
                We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.
            </DescriptionWrapperComponent>

            <ButtonComponent>Book an appointment</ButtonComponent>
        </div>

        <div class="shrink-0">
            <PhotoComponent
                src="/pages/home/book.png"
                alt="Book section photo"
            />
        </div>
    </SectionComponent>
</template>