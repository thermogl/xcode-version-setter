# xcode-version-setter
GitHub Action to set Build Numbers for Xcode projects

## Inputs

### `style`

**Required** The style of build number to use. Default `"time"`. 

- time: Current Unix Time in Seconds (eg: 1575499222)
- hextime: Current Unix Time in Second in Hex: (eg: 5de83486)

### `working-directory`

The directory containing your Xcode project. Default `"./"`.

## Outputs

### `build-number`

The build number that was generated and set

## Example usage

uses: thermogl/xcode-version-setter@v1
with:
	style: 'time'