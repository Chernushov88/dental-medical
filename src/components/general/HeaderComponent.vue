<template>
  <header
    class="z-20 max-w-content w-full mx-auto px-5 lg:px-10 lg:py-4.5 rounded-lg my-10 flex atems-center justify-between transition-all duration-300"
    :class="isWhite ? 'lg:bg-white' : 'lg:bg-blue-light'"
  >
    <LogoComponent class="hidden lg:block" />

    <HeaderMobileVisionComponent
      class="lg:hidden"
      @click-toggle="toggleMobileMenu"
    />

    <NavBarComponent class="hidden lg:flex" />

    <div v-if="logged" class="hidden lg:flex items-center gap-x-5">
      <UserDropdownComponent />
      <ButtonComponent>Bok Now</ButtonComponent>
    </div>

    <div v-else>
      <nuxt-link to="/login" class="text-h2 font-semibold mr-8 text-blue-dark">
        Login
      </nuxt-link>
      <ButtonComponent to="/sing-up">Sign Up</ButtonComponent>
    </div>

    <MobileMenuComponent v-model="activeMobileMenu" />
  </header>
</template>

<script setup lang="ts">
import { useMobileMenuStore } from '~/store/useMobileMenuStore';
import { useAuthStore } from '~/store/useAuthStore';
import { useHeader } from '#build/imports';

const { activeMobileMenu } = storeToRefs(useMobileMenuStore());
const { toggleMobileMenu } = useMobileMenuStore();
const { logged } = storeToRefs(useAuthStore());

const { isWhite } = useHeader();
</script>
