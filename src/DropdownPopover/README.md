# `<DropdownPopover/>`

> A common dropdown mechanism using the Popover component

There is a common behaviour of "Dropdown-like" components in our library. They have a trigger
element, and a list of items that opens when the user interacts with that trigger element. The
`<DropdownPopover/>` component is a higher-level component that encapsulates that logic, and allows
you to create "Dropdown-like" component with ease.

It uses the `<DropdownLayout/>` component to show the list of items, and the `<Popover/>`
component under the hood in order to position the list in the best way possible. It also manage
keyboard navigation out of the box.

## Acceptable `children`

The `<DropdownPopover/>` can accept two types of children:

* A regular React node, which will be rendered as-is.
* A function which returns a React node (a "render prop"). The function can accept a single
    arguments whose value is an object with the following properties:

| Name | Type | Description |
| ---- | ---- | ----------- |
| `open(e)` | `Function` | A function that will open the items list. Can be called only when in "Uncontrolled" mode. |
| `close(e)` | `Function` | A function that will close the items list. Can be called only when in "Uncontrolled" mode. |
| `toggle(e)` | `Function` | A function that will toggle the items list. Can be called only when in "Uncontrolled" mode. |
| `delegateKeyDown(e)` | `Function` | The underlaying `<DropdownLayout/>`'s `keydown` handler. It can be called inside another `keydown` event in order to delegate it (can be useful when using the "Controlled" mode). |
| `selectedOption` | `{ id: any, value: any }`, `null` | The value of the selected option. |

**Note:** When calling a trigger function, make sure to provide the event to it in order to have the
best behaviour.

## Opening modes

You can use the `<DropdownPopover/>`'s opening mechanism in 2 modes.

### Uncontrolled opening mode

In this mode you have access to the opening triggers, however the `<DropdownPopover/>` component
still manage the visibility state of the items list by itself. You can access the triggers using a
render prop. For example, to create a basic dropdown that triggers on hover:

```jsx
<DropdownPopover>
  {({ open, close, selectOption }) => (
    <Button onMouseEnter={open} onMouseLeave={close}>
      {selectOption ? `Selected item is ${selectOption.value}` : 'Hove me'}
    </Button>
  )}
</DropdownPopover>
```

In this mode, the `<DropdownPopover/>` component will also handle the following:

* Keyboard navigation (opening the list with certain keys, navigating the list using the arrow keys,
    option selection)
* Closing the list when clicking outside of the component
* Closing the list when an option is selected

### Controlled opening mode

In this mode, it's up to you to decide when the list should be opened. You can control it using the
`open` prop. Note that you'll also need to manage keyboard navigation by yourself (the
`delegateKeyDown` function may be useful). Check the examples bellow.

## Examples

By default, the playground examples is set to use the "Uncontrolled" mode. You can still control the
value of the `open` prop in order to make it "Controlled", but make sure to hit the "Clear" button
to make it "Uncontrolled" again.
