<template>
  <div class="flex h-screen w-screen flex-col overflow-hidden bg-base-100 text-base-content">
    <!-- Navbar -->
    <div class="navbar bg-base-300">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl normal-case">Pog Online Editor</a>
      </div>
      <div class="flex-none gap-2">
        <button v-if="isLoaded" class="btn btn-primary btn-sm" @click="downloadConfig">
          <i class="mdi mdi-download"></i> Download pog.json
        </button>
        <button v-if="isLoaded" class="btn btn-outline btn-sm" @click="resetConfig">
          <i class="mdi mdi-close"></i> Close
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-grow overflow-y-auto p-4">
      <div v-if="!isLoaded" class="flex h-full flex-col items-center justify-center gap-6">
        <div class="text-center">
          <h1 class="text-4xl font-bold">Welcome to Pog Online Editor</h1>
          <p class="py-6">Upload your <code>pog.json</code> file to edit your keyboard configuration.</p>
          <button class="btn btn-primary btn-lg" @click="triggerFileUpload">
            <i class="mdi mdi-upload"></i> Upload pog.json
          </button>
          <input
            ref="fileInput"
            type="file"
            accept=".json"
            class="hidden"
            @change="handleFileUpload"
          />
        </div>
      </div>

      <div v-else class="container mx-auto">
        <KeymapEditor />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { keyboardStore } from './store'
import KeymapEditor from './components/KeymapEditor.vue'

const isLoaded = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

const triggerFileUpload = () => {
  fileInput.value?.click()
}

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    const file = target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string
        const config = JSON.parse(content)
        console.log('Importing config:', config)
        keyboardStore.import({
          path: '',
          configContents: config,
          folderContents: [],
          serial: false
        })
        isLoaded.value = true
      } catch (error) {
        console.error('Error parsing JSON:', error)
        alert('Failed to load JSON file. Please make sure it is a valid pog.json.')
      }
    }
    if (!file) return
    reader.readAsText(file)
  }
}

const downloadConfig = () => {
  const config = keyboardStore.serialize()
  const dataStr = JSON.stringify(config, null, 2)
  const blob = new Blob([dataStr], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'pog.json'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

const resetConfig = () => {
  isLoaded.value = false
  // Optional: clear store if needed, but import clears it anyway
}
</script>

<style>
/* Global styles if needed, mostly Tailwind now */
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
