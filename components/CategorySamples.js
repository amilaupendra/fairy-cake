'use client';

import { useOrder } from '@/context/OrderContext';
import CakeCard from './CakeCard';

export default function CategorySamples({ categoryTitle, samples }) {
  const { addToCart, removeFromCartByBaseId, getItemQuantity } = useOrder();

  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {samples.map((sample, index) => {
        const relatedImages = [sample.image, ...samples.filter((_, i) => i !== index).map((item) => item.image)].slice(0, 4);
        const galleryImages = [...new Set(relatedImages)];

        const cartItem = {
          id: sample.id,
          title: sample.title,
          image: sample.image,
          price: sample.price,
          size: sample.size,
          category: categoryTitle
        };

        return (
          <CakeCard
            key={sample.id}
            cake={{ ...sample, galleryImages }}
            showCartActions
            quantity={getItemQuantity(sample.id)}
            onAdd={(customization) => addToCart({ ...cartItem, customization })}
            onRemove={() => removeFromCartByBaseId(sample.id)}
          />
        );
      })}
    </section>
  );
}
