
function SearchForm() {
  return (
	<form id="search">
        <fieldset role="group">
          <input name="text" type="text" placeholder="Busca tu imagen" autocomplete="text" />
          <input type="submit" value="Buscar" className="primary" />
        </fieldset>
    </form>
  );
}

export default SearchForm;