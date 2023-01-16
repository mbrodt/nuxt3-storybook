<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

interface Props {
  tabTitles: string[];
}

defineProps<Props>();
</script>
<template>
  <div>
    <TabGroup>
      <TabList class="flex gap-8">
        <Tab v-for="tabTitle in tabTitles" v-slot="{ selected }">
          <p :class="{ 'underline font-bold': selected }">{{ tabTitle }}</p>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel v-for="slot of Object.keys($slots)">
          <slot :name="slot"></slot>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>
