'use client'
import { Select } from '@mantine/core'
import '@mantine/core/styles/global.css'

export const SelectOrder = (
    <Select
        label="Your favorite library"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
    />
)
