import styled from "styled-components";

export const FilterAndSortingContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom:2rem;
`;

export const FilterDropdownButton = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding-left: 20px;
  background-color: #3498db;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  position: relative;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 26%;
  margin-right: 70px;
  text-align: center;
  width: 150px;
  display: ${props => (props.showDropdown ? 'block' : 'none')};
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const DropdownItem = styled.button`
  padding: 4px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
`;

export const SelectedCategory = styled.span`
  margin-right: 26px;
`;

export const SortButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background-color: #f39c12;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;