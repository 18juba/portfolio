<script>
  let { data, common } = $props();
</script>

<section
  class="
    mb-12 grid w-full items-center gap-8
    rounded-2xl
    bg-neutral-900 p-6
    sm:p-8
    lg:grid-cols-[1fr_auto]
    lg:gap-12 lg:p-10
  "
  aria-labelledby="hero-title"
>
  <div class="max-w-3xl">
    <p
      class="
        mb-3 font-semibold
        text-sky-400
      "
    >
      {data.greeting}
    </p>

    <h1
      id="hero-title"
      class="
        text-4xl font-bold tracking-tight
        text-neutral-100
        sm:text-5xl
        lg:text-6xl
      "
    >
      Jorge Lucas
    </h1>

    <p
      class="
        mt-3 text-xl font-medium
        text-neutral-300
        sm:text-2xl
      "
    >
      {data.title}
    </p>

    <p class="mt-2 text-sm text-neutral-500">
      {data.location}
      <span aria-hidden="true"> · </span>
      {data.available}
    </p>

    <p
      class="
        mt-6 max-w-2xl
        text-base leading-relaxed
        text-neutral-400
        sm:text-lg
      "
    >
      {data.about}
    </p>

    <div class="mt-7 flex flex-wrap gap-3">
      <a
        href={data.contact_url}
        class="
          inline-flex min-h-11 items-center
          justify-center gap-2
          rounded-lg bg-sky-600
          px-5 py-2.5
          font-bold text-white
          transition-colors
          hover:bg-sky-700
        "
      >
        {data.contact}
      </a>

      <a
        href={data.resume_url}
        download
        class="
          inline-flex min-h-11 items-center
          justify-center gap-2
          rounded-lg
          bg-neutral-800
          px-5 py-2.5
          font-bold text-neutral-100
          transition-colors
          hover:bg-neutral-700
        "
      >
        {data.resume}
      </a>

      <a
        href="https://www.linkedin.com/in/jorge-lucas-silva"
        target="_blank"
        rel="noopener noreferrer"
        class="
          inline-flex min-h-11 items-center
          justify-center gap-2
          rounded-lg
          bg-neutral-800
          px-5 py-2.5
          font-bold text-neutral-200
          transition-colors
          hover:bg-neutral-700
        "
      >
        <img
          src="/icons/linkedin.webp"
          alt=""
          aria-hidden="true"
          class="h-5 w-5 object-contain"
        />
        {common.linkedin}
        <span class="sr-only">{common.newTabSuffix}</span>
      </a>
    </div>
  </div>

  <!-- Quando tiver foto profissional, descomente e use uma imagem real -->
  <!--
  <figure class="mx-auto shrink-0 lg:mx-0">
    <img
      src="/images/jorge-lucas.jpg"
      alt={common.profileAlt}
      width="320"
      height="320"
      class="
        size-52 rounded-2xl
        border border-neutral-700
        bg-neutral-800
        object-cover object-center
        shadow-xl shadow-black/20
        sm:size-64
        lg:size-72
      "
    />
  </figure>
  -->
</section>