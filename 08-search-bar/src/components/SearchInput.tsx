type SearchInputType = {
  query: string;
  handleChangeQuery: (text: string) => void;
};

function SearchInput({ query, handleChangeQuery }: SearchInputType) {
  return (
    <>
      <input type="text" value={query} onChange={(e) => handleChangeQuery(e.target.value)} />
    </>
  );
}

export default SearchInput;
