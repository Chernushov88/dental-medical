<template>
  <SectionComponent
    class="pt-24 pb-20 flex flex-col gap-12 lg:flex-row lg:items-end lg:gap-40 lg:!px-17.5"
  >
    <div>
      <SectionHeadingComponent class="max-w-[500px]">
        We’re <MarkedWordComponent>welcoming</MarkedWordComponent> new patients and can’t wait
        to meet you.
      </SectionHeadingComponent>

      <DescriptionWrapperComponent>
        We use only the best quality materials on the market in order to provide
        the best products to our patients, So don’t worry about anything and
        book yourself.
      </DescriptionWrapperComponent>

      <PhoneFormComponent />
    </div>

    <div class="shrink-0">
      <PhotoComponent
        src="/pages/home/smiledClient.png"
        alt="Phone form photo with smiled client"
      />
    </div>
  </SectionComponent>
</template>
