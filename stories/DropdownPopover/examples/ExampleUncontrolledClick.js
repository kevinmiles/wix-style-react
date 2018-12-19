/* eslint-disable */

<div style={{ textAlign: 'center' }}>
  <DropdownPopover
    options={[
      { id: 0, value: 'First option' },
      { id: 1, value: 'Second option' },
      { id: 2, value: 'Third option' },
      { id: 3, value: 'Fourth option' },
      { id: 4, value: 'Fifth option' },
      { id: 5, value: 'Sixth option' },
    ]}
  >
    {({ toggle, selectedOption = {} }) => {
      return (
        <Button theme="no-border" suffixIcon={<ChevronDown />} onClick={toggle}>
          {selectedOption.value || 'Please choose'}
        </Button>
      );
    }}
  </DropdownPopover>
</div>
