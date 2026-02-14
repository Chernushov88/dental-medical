<template>
  <form
    class="lg:border border-blue-sky lg:rounded-2lg lg:px-10 lg:pt-10 lg:pb-8"
  >
    <div class="flex flex-col gap-3 h-full">
      <div class="lg:flex gap-8">
        <FormInputTextComponent
          label="First name"
          placeholder="First name"
          class="flex-1"
        />

        <FormInputTextComponent
          label="Last name"
          placeholder="Last name"
          class="flex-1"
        />
      </div>

      <FormInputTextComponent label="Email" placeholder="you@company.com" />

      <FormInputTextComponent
        label="Phone number"
        placeholder="+38-097-590-82-74"
      />

      <FormInputTextComponent
        label="Select date"
        placeholder="January - 01 - 2026"
      />

      <FormInputTextComponent
        class="flex-auto"
        type="textarea"
        label="Message"
      />

      <div class="flex justify-center mt-8">
        <ButtonComponent>Book an appointment</ButtonComponent>
      </div>
    </div>
  </form>
</template>
