<template>
  <SectionComponent
    firs-gradient-section
    background
    class="pt-10 pb-10 lg:pb-20"
  >
    <div class="flex flex-col items-center relative">
      <SectionHeadingComponent class="capitalize lg:!text-h1">
        <MarkedWordComponent>Get in touch</MarkedWordComponent>
      </SectionHeadingComponent>

      <DescriptionWrapperComponent class="max-w-[424px] lg:text-center">
        Book an Appointment to treat your teeth right now.
      </DescriptionWrapperComponent>
    </div>

    <div
      class="relative lg:flex lg:gap-10 lg:px-20 lg:justify-center lg:items-stretch"
    >
      <ContactFormComponent class="mb-16 lg:mb-0 flex-1 lg:order-2" />

      <ContactsInfoComponent class="flex-1" />
    </div>
  </SectionComponent>
</template>
