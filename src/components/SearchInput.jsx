import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useCountriesList, useFilteredList } from "../contexts/Context";

export default function SearchInput() {
  const [countries, setCountries] = useCountriesList();
  const [filteredList, setFilteredList] = useFilteredList();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const inputValue = useRef("");
  const [input, setInput] = useState("");

  const handleChange = () => {
    console.log(inputValue.current.value);
    let search = inputValue.current.value;

    if (search === null) {
      setFilteredList(countries);
    } else {
      let filter = countries.filter((country) => {
        return country.name.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredList(filter);
    }
  };

  const handleSelect = (selected) => {
    console.log(selected);
    let filter = countries.filter((country) => {
      return country.name.includes(selected);
    });
    setFilteredList(filter);
  };

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        setOptions([...countries]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>{params.InputProps.endAdornment}</React.Fragment>
            ),
          }}
          inputRef={inputValue}
          onChange={handleChange}
        />
      )}
      onInputChange={(event, newInputValue, reason) => {
        if (reason === "clear") {
          console.log("reset");
          setFilteredList(countries);
          return;
        } else {
          console.log("oninputchange", newInputValue);
          handleSelect(newInputValue);
        }
      }}
    />
  );
}
