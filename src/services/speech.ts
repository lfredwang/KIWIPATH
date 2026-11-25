export interface VoiceOption {
  voiceURI: string;
  name: string;
  lang: string;
  isNZ: boolean;
}

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function getEnglishVoices(): VoiceOption[] {
  if (!isSpeechSupported()) return [];
  const voices = window.speechSynthesis.getVoices();
  return voices
    .filter((v) => v.lang.toLowerCase().startsWith('en'))
    .map((v) => ({
      voiceURI: v.voiceURI,
      name: v.name,
      lang: v.lang,
      isNZ: v.lang.toLowerCase() === 'en-nz',
    }))
    .sort((a, b) => {
      if (a.isNZ && !b.isNZ) return -1;
      if (!a.isNZ && b.isNZ) return 1;
      if (a.lang.toLowerCase() === 'en-au' && b.lang.toLowerCase() !== 'en-au') return -1;
      if (b.lang.toLowerCase() === 'en-au' && a.lang.toLowerCase() !== 'en-au') return 1;
      return a.name.localeCompare(b.name);
    });
}

export function speakText(
  text: string,
  options?: { rate?: number; preferredVoiceUri?: string }
): boolean {
  if (!isSpeechSupported()) return false;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    let chosen = options?.preferredVoiceUri
      ? voices.find((v) => v.voiceURI === options.preferredVoiceUri)
      : undefined;

    if (!chosen) {
      chosen =
        voices.find((v) => v.lang.toLowerCase() === 'en-nz') ??
        voices.find((v) => v.lang.toLowerCase() === 'en-au') ??
        voices.find((v) => v.lang.toLowerCase() === 'en-gb') ??
        voices.find((v) => v.lang.toLowerCase().startsWith('en'));
    }

    if (chosen) {
      utterance.voice = chosen;
      utterance.lang = chosen.lang;
    } else {
      utterance.lang = 'en-NZ';
    }
    utterance.rate = options?.rate ?? 0.92;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
    return true;
  } catch {
    return false;
  }
}
