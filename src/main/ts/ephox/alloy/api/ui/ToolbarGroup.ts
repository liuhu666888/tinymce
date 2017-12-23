import Behaviour from '../behaviour/Behaviour';
import Keying from '../behaviour/Keying';
import SketchBehaviours from '../component/SketchBehaviours';
import Sketcher from './Sketcher';
import ToolbarGroupSchema from '../../ui/schema/ToolbarGroupSchema';
import { Merger } from '@ephox/katamari';

var factory = function (detail, components, spec, _externals) {
  return Merger.deepMerge(
    {
      dom: {
        attributes: {
          role: 'toolbar'
        }
      }
    },
    {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,

      behaviours: Merger.deepMerge(
        Behaviour.derive([
          Keying.config({
            mode: 'flow',
            selector: '.' + detail.markers().itemClass()
          })
        ]),
        SketchBehaviours.get(detail.tgroupBehaviours())
      ),

      'debug.sketcher': spec['debug.sketcher']
    }
  );
};

export default <any> Sketcher.composite({
  name: 'ToolbarGroup',
  configFields: ToolbarGroupSchema.schema(),
  partFields: ToolbarGroupSchema.parts(),
  factory: factory
});