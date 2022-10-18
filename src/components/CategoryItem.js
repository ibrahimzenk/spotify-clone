function Category({ category }) {
  return (
    <div style={{ background: category.color }} className="before:pt-[100%] before:block rounded-lg relative">
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-2xl tracking-tighter font-semibold">{category.title}</h3>
        <img src={category.cover} alt="" className="w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[-2%] absolute bottom-0 right-0 shadow-spotify" />
      </div>
    </div>
  );
}

export default Category;
