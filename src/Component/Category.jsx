const Category = () => {
  return (
    <div>
      <h2 className="mb-2">Categroy</h2>
      <div className="border border-slate-300 rounded-md p-4">
        <ul className="space-y-3 text-sm">
          <li className="border border-sky-300 p-2 rounded-2xl">Technology</li>
          <li className="border border-sky-300 p-2 rounded-2xl">Cooking</li>
          <li className="border border-sky-300 p-2 rounded-2xl">Travelling</li>
          <li className="border border-sky-300 p-2 rounded-2xl">Coding</li>
          <li className="border border-sky-300 p-2 rounded-2xl">Trading</li>
        </ul>
      </div>
    </div>
  );
};
export default Category;
