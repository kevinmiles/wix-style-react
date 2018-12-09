/**
 * Storybook list of stories
 *
 * This is a file fixture used to test the sotries.js codemod.
 */

// 1. Foundations
import '../stories/Typography/TypographyStory.js'; // 1.2 Typography
import '../stories/Label.story.js'; // 1.2 + Label
import '../stories/NewIcons'; // 1.4 Icons

// Components API
import '../stories/Collapse.story';
import '../stories/Counter/index.story';

// Generated components using the component generator
import '../stories/SomePreviouslyGeneratedComponent/index.story';
import '../stories/AnotherSomePreviouslyGeneratedComponent/index.story';

// Styling
import '../stories/Typography/TypographyClassesStory';
