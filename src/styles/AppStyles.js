import styled from '@emotion/styled';

export const AppContainer = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 20px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 15px;
  }

  @media (min-width: 1025px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: #ffffff;
  font-size: 2em;
  align-self: flex-start;
  margin-left: 25%;

  @media (max-width: 600px) {
    font-size: 1.5em;
    margin-left: 5%;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 1.75em;
    margin-left: 5%; 
  }
`;

export const TaskSummary = styled.div`
  // margin-top: 10px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 600px) {
    font-size: 1em;
    padding: 15px;
    max-width: 280px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 1.1em;
    padding: 18px;
    max-width: 300px; 
  }
`;

export const TaskTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 15px;
`;

export const TaskDone = styled.div`
  font-size: 1.5em;

  @media (max-width: 600px) {
    font-size: 1.2em;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 1.3em;
  }
`;

export const KeepItUp = styled.div`
  font-size: 1em;

  @media (max-width: 600px) {
    font-size: 0.8em;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 0.9em;
  }
`;

export const TaskCount = styled.span`
  background-color: #88b53e;
  color: #ffffff;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  font-size: 2em;

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
    padding: 8px;
    font-size: 1.5em;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    width: 50px;
    height: 50px;
    padding: 9px;
    font-size: 1.5em;
  }
`;

export const Content = styled.div`
  margin-top: 10px;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    margin-top: 5px;
    max-width: 280px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    margin-top: 10px;
    max-width: 300px;
  }
`;

export const TaskInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

export const TaskInput = styled.input`
  flex: 1;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #2c2c2c;
  color: #ffffff;

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    padding: 8px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 9px;
  }
`;

export const AddButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #88b53e;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 8px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 9px;
  }
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 400px;
`;

export const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 0;
  margin-bottom: 10px;
  width: 100%;
  position: relative;
  min-height: 30px;

  @media (max-width: 600px) {
    padding: 8px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 9px;
  }
`;

export const TaskName = styled.input`
  flex: 1;
  color: #ffffff;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }

  &:focus {
    outline: none;
  }
`;

export const EditButton = styled.button`
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
  margin-left: 5px;

  @media (max-width: 600px) {
    padding: 4px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 4.5px;
  }
`;

export const DeleteButton = styled.button`
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
  margin-left: 5px;

  @media (max-width: 600px) {
    padding: 4px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 4.5px;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #88b53e;
  appearance: none;
  background-color: transparent;
  cursor: pointer;

  &:checked {
    background-color: #88b53e;
  }

  @media (max-width: 600px) {
    width: 18px;
    height: 18px;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    width: 19px;
    height: 19px;
  }
`;
