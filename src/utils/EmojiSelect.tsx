import { computed, defineComponent, PropType, ref } from 'vue';
import { emojiList } from './emojjiList';
import s from './EmojiSelect.module.scss';
export const EmojiSelect = defineComponent({
    props: {
        modelValue: {
            type: String
        },
        onUpdateModelValue: {
            type: Function as PropType<(emoji: string) => void>
        }
    },
    setup: (props, context) => {
        const refSelected = ref(0)
        const table: [string, string[]][] = [
            ['表情', ['face-smiling', 'face-affection', 'face-tongue', 'face-hand',
                'face-neutral-skeptical', 'face-sleepy', 'face-unwell', 'face-hat',
                'face-glasses', 'face-concerned', 'face-negative', 'face-costume'
            ]],
            ['手势', ['hand-fingers-open', 'hand-fingers-partial', 'hand-single-finger',
                'hand-fingers-closed', 'hands', 'hand-prop', 'body-parts']],
            ['人物', ['person', 'person-gesture', 'person-role', 'person-fantasy',
                'person-activity', 'person-sport', 'person-resting']],
            ['衣服', ['clothing']],
            ['动物', ['cat-face', 'monkey-face', 'animal-mammal', 'animal-bird',
                'animal-amphibian', 'animal-reptile', 'animal-marine', 'animal-bug']],
            ['植物', ['plant-flower', 'plant-other']],
            ['自然', ['sky & weather', 'science']],
            ['食物', [
                'food-fruit', 'food-vegetable', 'food-prepared', 'food-asian',
                'food-marine', 'food-sweet'
            ]],
            ['运动', ['sport', 'game']],
        ]
        const onClick = (index: number) => {
            refSelected.value = index
        }
        const onClickEmojl = (item: string) => {
            if (props.onUpdateModelValue) {
                props.onUpdateModelValue(item)
            } else {
                context.emit('update:modelValue', item)
            }
        }
        const emojis = computed(() => {
            const selectedItem = table[refSelected.value][1]
            return selectedItem.map(category =>
                emojiList.find(item => item[0] === category)?.[1]
                    .map(item => <li class={props.modelValue === item && s.selected} onClick={() => onClickEmojl(item)}>{item}</li>)
            )
        })
        return () => (
            <div class={s.emojiList}>
                <nav>
                    {table.map((item, index) =>
                        <span class={index === refSelected.value && s.selected} onClick={() => onClick(index)}>{item[0]}</span>
                    )}
                </nav>
                <ol>
                    {emojis.value}
                </ol>
            </div>
        )
    }
})