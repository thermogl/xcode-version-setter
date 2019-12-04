# xcode-version-setter
GitHub Action to set Build Numbers for Xcode projects

## Inputs

### `style`

**Required** The style of build number to use. Default `"time"`.

## Outputs

### `build-number`

The build number that was generated and set

## Example usage

uses: thermogl/xcode-version-setter@v1
with:
  style: 'time'