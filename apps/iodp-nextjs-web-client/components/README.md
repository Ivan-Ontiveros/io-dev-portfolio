# Components Folder Structure

This repository follows a structured approach to organize UI components, enabling reusability, clarity, and maintainability. Below is an explanation of the folder structure and naming conventions.

## Folder Structure

```
components/
├── base/
├── blocks/
├── ui/
```

### 1. **Base**

- **Purpose:** Contains foundational components that enhance core HTML elements with styling, attributes, or functionality. These components are the building blocks for creating reusable UI patterns.
- **Examples:**
  - `HyperlinkButton`: Combines `<a>` and `<button>` functionality.
  - `TextInput`: A styled `<input>` with validation.
  - `StyledImage`: An `<img>` with responsive styles and fallback behavior.

### 2. **Blocks**

- **Purpose:** Contains composite components that are combinations of `Base` components to achieve specific functionality or patterns. These components are reusable but not tied to any specific feature.
- **Examples:**
  - `ButtonGroup`: A collection of buttons arranged with consistent spacing.
  - `FormField`: Combines a label, input, and error message.
  - `DropdownMenu`: A styled dropdown built from `Base` components.

### 3. **UI**

- **Purpose:** Houses pre-built components provided by ShadCN/UI, a design system used to maintain consistency across the application.
- **Notes:**
  - These components are pre-styled and designed for specific UI patterns.
  - While these components are used globally, you can further customize them in feature folders as needed.

## Component Usage Guidelines

1. **Global Components:**

   - Use components from the `base` and `blocks` folders for shared functionality across the app.
   - Avoid tightly coupling these components to specific features.

2. **Feature-Specific Enhancements:**

   - Import global components into feature folders and enhance them for the specific parent feature.
   - For example, a `Card` in the `blocks` folder can be extended with feature-specific logic or styling in the feature folder.

3. **ShadCN/UI Components:**
   - Use the components from the `ui` folder when a pre-built solution fits your use case.
   - Customize them in feature folders as needed without modifying the originals.

## Example Workflow

1. A `Button` component is defined in the `base` folder as a foundational element.
2. A `ButtonGroup` component in the `blocks` folder combines multiple `Button` components with spacing and behavior.
3. For a specific feature, the `ButtonGroup` is imported into the feature's folder and customized further.

## Benefits of This Structure

- **Clarity:** Clear separation of foundational components, reusable building blocks, and pre-built UI components.
- **Reusability:** Encourages the creation of generic components that can be adapted for various features.
- **Maintainability:** Keeps the global system lean and feature-specific logic localized.

For any questions or contributions to the system, please refer to the project guidelines or contact the maintainers.
