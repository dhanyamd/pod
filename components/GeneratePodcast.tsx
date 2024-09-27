import { GeneratePodcastProps } from '@/types'
import { Label } from '@radix-ui/react-label'
import React, { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Loader } from 'lucide-react'
import { useAction } from 'convex/react'
import { api } from '@/convex/_generated/api'
import {v4 as uuidv4} from "uuid"

const useGeneratePocast = ({
    setAudio,
    voicePrompt,
    voiceType,
    setAudioStorageId
} : GeneratePodcastProps) => {
    const [isGenerating, setIsGenerating] = useState(false)
    const getPodCastAudio = useAction(api.openai.generateAudioAction)
    const generatePodcast = async() => {
         setIsGenerating(true);

         setAudio('');

         if(!voicePrompt){
            return setIsGenerating(false)
         }

         try{   
            const response = await getPodCastAudio({
               voice : voiceType,
               input : voicePrompt
            })
            const blob = new Blob([response], {type : 'audio/mpeg'})
            const filename = `podcast-${uuidv4()}.mp3`
            const file = new File([blob], filename, {type : 'audio/mpeg'})
         }catch(error){
            console.log("Error generating podcast", error)
         }
    }
    return {
        isGenerating,
        generatePodcast: () => {}
    }
}

const GeneratePodcast = (props : GeneratePodcastProps) => {
   const {isGenerating, generatePodcast} = useGeneratePocast(props)
  return (
    <div>
    <div className="flex flex-col gap-2.5">
        <Label className='text-16 font-bold text-white-1'>
        AI Prompt to generate podcast
        </Label>   
        <Textarea className='input-class font-light focus-visible:ring-offset-lime-500'
        placeholder='Provide text to generate audio'
        rows={5}
        value={props.voicePrompt}
        onChange={(e) => props.setVoicePrompt(e.target.value)}
        >
        </Textarea> 
    </div>
    <div className='mt-5 w-full max-w-[200px]'>
    <Button type="submit" className="text-16 bg-lime-400 py-4 font-ebold
          text-white-1 ">
            {isGenerating ? (
                    <>
                      Generating
                      <Loader size={20} className="animate-spin ml-2" />
                    </>
                  ) : (
                    'Generate'
                  )}
         </Button>
    </div>
    {props.audio && (
        <audio 
          controls
          src={props.audio}
          autoPlay
          className="mt-5"
          onLoadedMetadata={(e) => props.setAudioDuration(e.currentTarget.duration)}
        />
      )}
    </div>
  )
}

export default GeneratePodcast
