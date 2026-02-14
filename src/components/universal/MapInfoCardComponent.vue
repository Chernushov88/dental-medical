<template>
  <div
    class="overflow-hidden rounded-lg w-full h-[300px] relative border lg:border-2 border-blue-sky"
  >
    <img
      :src="'./pages/contacts/map.png'"
      alt="Map image"
      class="h-full w-full object-cover object-center"
    />

    <ContactItemComponent
      icon="location"
      color="blue-sky"
      title="Office Address"
      :data="['Dombrovsky Street, 86, Zhytomyr, 10001']"
      class="absolute bottom-5 left-5 border-none"
      style="width: calc(100% - 40px)"
    />
  </div>
</template>
