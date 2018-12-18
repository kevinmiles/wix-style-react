/* eslint-disable */

class ExampleUncontrolledMouse extends React.Component {
  render() {
    return (
      <DropdownPopover
        showArrow
        options={[
          { id: 0, value: 'First option' },
          { id: 1, value: 'Second option' },
          { id: 2, value: 'Third option' },
          { id: 3, value: 'Fourth option' },
          { id: 4, value: 'Fifth option' },
          { id: 5, value: 'Sixth option' },
        ]}
      >
        {({ open, close, selectedOption = {} }) => {
          return (
            <Button onMouseEnter={open} onMouseLeave={close}>
              {selectedOption.value || 'Nothing is selected'}
            </Button>
          );
        }}
      </DropdownPopover>
    );
  }
}

render(
  <div style={{ textAlign: 'center' }}>
    <ExampleUncontrolledMouse />
  </div>
);
