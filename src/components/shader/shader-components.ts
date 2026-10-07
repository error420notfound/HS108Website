import BarShift from 'shaders/core/BarShift';
import LinearGradient from 'shaders/core/LinearGradient';
import SolidColor from 'shaders/core/SolidColor';

// Only a catalog of official components. Rendering stays in shaders/js.
const entries = [BarShift, LinearGradient, SolidColor].map(definition => ({ definition }));
export const getAllShaders = () => entries;
export const getShaderByName = (name: string) => entries.find(entry => entry.definition.name === name);
// The core distribution consumes these minified export names from its registry chunk.
export { getShaderByName as n, getAllShaders as t };