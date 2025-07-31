<template>
    <SectionComponent class="pt-7">
        <div>
            <h1 class="text-h2 mb-8">
                Get ready for your best ever Dental <MarkedWord>Experience!</MarkedWord>
            </h1>
        
            <p class="text-b1 text-text">
                We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.
            </p>
        
            <div class="mt-8 mb-12 flex items-center gap-x-4">
                <ButtonComponent>Get Started</ButtonComponent>
            
                <PhoneBlock title="Dental 24H Emergency" phone="0900-78601" />
            </div>
        
            <UserMessageCard
                name="Thomas daniel"
                position="Sr Dental"
                photo="/user/user2.png"
                link="https://linkedin.com"
                message="Top Quailty dental treatment done by field experts, Highly recommended for everyone"
                icon="linkedIn"
            />
        </div>

        <PhotoSection class="mt-14" />
    </SectionComponent>
</template>


<script setup lang="ts">

import UserMessageCard from '@/components/universal/UserMessageCardComponent.vue';
import MarkedWord from '@/components/universal/MarkedWordComponent.vue';
import PhoneBlock from './PhoneBlockComponent.vue';
import PhotoSection from './PhotoSectionComponent.vue';
</script>