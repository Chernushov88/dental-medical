<template>
  <SectionComponent
    full-width
    background
    bg-color="bg-blue-dark"
    class="flex items-center justify-center lg:gap-20 lg:py-12"
  >
    <div class="max-w-[570px] text-white shrink-0">
      <SectionHeadingComponent class="lg:!mb-3 capitalize">
        Leave your worries at the door and enjoy a healthier, more
        <MarkedWordComponent>precise smile</MarkedWordComponent>
      </SectionHeadingComponent>

      <DescriptionWrapperComponent class="text-white lg:!mb-8 max-w-[500px]">
        We use only the best quality materials on the market in order to provide
        the best products to our patients, So don’t worry about anything and
        book yourself.
      </DescriptionWrapperComponent>

      <Button>
        <span class="flex items-center">
          <span class="mr-2">Learn More</span>

          <ArrowCircleRightComponent white />
        </span>
      </Button>
    </div>

    <div class="max-w-[400px] shrink-0 w-full">
      <FastConnectFormComponent />
    </div>
  </SectionComponent>
</template>
