<script setup lang="ts">
defineProps<{
  buttonLabel: string;
}>();
const reviewText = ref("");
const rating = ref(0);
const isOpen = ref(false);
const submitReview = () => {
  console.log("submitReview");
  isOpen.value = false;
};
</script>

<template>
  <UModal
    :open="isOpen"
    @close="isOpen = false"
    title="Add review"
    description="Leave your review about the product."
  >
    <UButton
      :label="buttonLabel"
      color="primary"
      variant="subtle"
      @click="isOpen = true"
    />

    <template #content>
      <UContainer class="max-w-2xl mx-auto p-4">
        <h2 class="text-xl font-semibold">Add review</h2>
        <p class="text-gray-600 text-sm mb-5">
          Leave your review about the product.
        </p>
        <form class="grid grid-cols-1 gap-4 mb-5">
          <input type="hidden" v-model="rating" />

          <!-- Stars -->
          <div class="col-span-1">
            <div class="flex items-center gap-2">
              <UIcon
                name="i-lucide-star"
                class="text-gray-600 text-xl cursor-pointer"
                :class="{ 'text-yellow-500': rating >= star }"
                v-for="star in 5"
                :key="star"
                @click="rating = star"
              />
            </div>
          </div>

          <div class="col-span-1">
            <UTextarea
              v-model="reviewText"
              placeholder="Write your review"
              class="w-full"
              :rows="6"
            />
          </div>

          <div class="flex flex-1 items-end">
            <UButton
              color="primary"
              variant="solid"
              block
              label="Submit review"
              :disabled="!reviewText || rating === 0"
              @click="submitReview"
            />
          </div>
        </form>
      </UContainer>
    </template>
  </UModal>
</template>
