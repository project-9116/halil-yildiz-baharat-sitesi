// import { createClient } from "@supabase/supabase-js";
// import { createCache } from "lru-cache"
// import { useNuxtApp } from "#app";

// const { $supabase } = useNuxtApp();

// const cache = new Map()

// export default defineEventHandler(async (event) => {
//   const { url } = event.node.req;
//   if (cache.has(url)) {
//     return cache.get(url)
//   }

//   const { data, error } = await $supabase.storage.from("fotograflar").download(url)

//   if (error) {
//     throw new Error(error.message)
//   }

//   const buffer = await data.arrayBuffer()
//   cache.set(url, buffer)

//   event.node.res.setHeader('Content-Type', "image/png")
//   event.node.res.end(Buffer.from(buffer))

// })