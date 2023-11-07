"use server";

import { connectDB } from "../mongoose";
import { scrapedAmazonProduct } from "../scraper";

export async function scrapAndStoreProducts(productUrl: string) {
  if (!productUrl) return;

  try {
    connectDB();
    const scrapedProduct = await scrapedAmazonProduct(productUrl);

    if (!scrapedProduct) return;
  } catch (error: any) {
    throw new Error(`Failed to create/update product: ${error.message}`);
  }
}
