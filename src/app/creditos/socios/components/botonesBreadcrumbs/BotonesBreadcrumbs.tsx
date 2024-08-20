'use client'
import { useSolicitudStore } from '@/app/hooks/creditos/useSolicitudStore';
import { useModalStore } from '@/app/hooks/ui/useModal';

import { NoteAdd } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

export const BotonesBreadcrumbs = () => {
  const { openModal, nameModal } = useModalStore();
  const { setActiveSolicitudCredito } = useSolicitudStore()

  const handeleAddSocio = () => {
    setActiveSolicitudCredito([])

    //openModal('Nuevo socio')
  }

  return (

    <Tooltip title="Nuevo socio" color="secondary" >
      <IconButton
        onClick={handeleAddSocio}
      >
        <NoteAdd />
      </IconButton>
    </Tooltip>
  )
}
