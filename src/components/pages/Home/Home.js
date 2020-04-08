import React, { useMemo, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Card from "components/Card"
import { InputSearch } from "components/InputSearch/index.style"
import { searchRequest } from "store/reducers/home"
import { CardsWrapper, Wrapper } from "./Home.style"
import { path } from "ramda"

export default ({ history }) => {
  const data = useSelector(({ home }) => home.data[home.data.search])
  const search = useSelector(({ home }) => home.data.search)
  const dispatch = useDispatch()
  const items = path(["items"], data) || []

  function handleSearch(e) {
    dispatch(searchRequest(e.target.value))
  }

  function handleCardClick(id) {
    history.push("/album/" + id)
  }

  const title = useMemo(() => {
    return items.length > 0 ? (
      <h1>Resultados encontrados para "{search}"</h1>
    ) : null
  }, [items])

  useEffect(() => {
    const lastSearch = localStorage.getItem("search")
    if (lastSearch) {
      dispatch(searchRequest(lastSearch))
    }
  }, [dispatch])

  return (
    <Wrapper>
      <label>
        <span>Busque por artistas, álbuns ou músicas</span>
        <InputSearch
          type="text"
          placeholder="Comece a escrever..."
          value={search}
          onChange={handleSearch}
        />
      </label>

      {title}

      <CardsWrapper>
        {items.map(item => (
          <Card
            key={item.id}
            onClick={() => handleCardClick(item.id)}
            imgSrc={path(["images", 1, "url"], item)}
            title={item.name}
            subtitle={path(["artists", 0, "name"], item)}
          ></Card>
        ))}
      </CardsWrapper>
    </Wrapper>
  )
}
