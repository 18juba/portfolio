<script>
    let { name, icon, description } = $props();
</script>

<article
  class="px-2 py-1 flex gap-4 items-center bg-neutral-900 rounded-lg w-40"
>
  <figure class="border-r border-white w-10 h-10 pr-2">
    <img
      src="/icons/{icon}.png"
      alt={description}
      class="w-full h-full object-contain pointer-events-none select-none"
    />
  </figure>
  <p class="font-bold">{name}</p>
</article>
