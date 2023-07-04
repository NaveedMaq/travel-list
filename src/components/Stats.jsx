export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;

  const packedPercentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className='stats'>
      <em>
        {packedPercentage === 100
          ? 'You are ready to go! ✈️'
          : `💼 You have ${numItems} items on your list, you already packed ${packedItems}
        (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
