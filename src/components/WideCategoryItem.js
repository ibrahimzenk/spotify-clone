function WideCategory({ category }) {
  return (
    <div style={{ background: category.color }} className="w-[27.375rem] h-[13.75rem] rounded-lg relative flex-shrink-0">
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-[2.5rem] tracking-tighter font-semibold">{category.title}</h3>
        <img src={category.cover} alt="" className="w-32 h-32 rotate-[25deg] translate-x-[18%] translate-y-[-2%] absolute bottom-0 right-0 shadow-spotify" />
      </div>
    </div>
  );
}

export default WideCategory;
