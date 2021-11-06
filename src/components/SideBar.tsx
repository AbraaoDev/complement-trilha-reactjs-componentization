
import React from "react";
import { GenreResponseProps } from "../utils/GenreResponseProps";

import { Button } from "./Button";

interface SideBarProps {
  genres: GenreResponseProps[] ,
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>,
  selectedGenreId: number,
}

function handleClickButton(id: number, setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>) {
  setSelectedGenreId(id);
}

export function SideBar({genres,  setSelectedGenreId, selectedGenreId,} : SideBarProps){

 

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id, setSelectedGenreId)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}