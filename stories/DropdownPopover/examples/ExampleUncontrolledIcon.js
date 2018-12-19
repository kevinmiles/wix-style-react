/* eslint-disable */

<div style={{ textAlign: 'center' }}>
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
    {({ open, close }) => {
      return (
        <Button theme="no-border" onMouseEnter={open} onMouseLeave={close}>
          <Image />
        </Button>
      );
    }}
  </DropdownPopover>
</div>
