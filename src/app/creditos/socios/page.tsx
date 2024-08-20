import { Breadcrumbs } from "@/app/components/breadcrumbs/Breadcrumbs"
import { Alert, Grid, Toolbar } from "@mui/material"
import { BotonesBreadcrumbs } from "./components/botonesBreadcrumbs/BotonesBreadcrumbs"
import { Tabla } from "./components/tablas/Tabla"
import { SocioModal } from "./components/modal/SocioModal"


export default function Socios() {

  const title = 'Socios'
  const mensaje = 'asd'

  return (
    <>
      <Breadcrumbs title={title} botones={<BotonesBreadcrumbs />} />
      <Toolbar>
        <Grid
          className='animate__animated animate__backInRight'
          item
          sx={{ flex: ' 1 1 100%' }}
          display={!!mensaje ? '' : 'none'}
        >
          <Alert severity='success' >{mensaje}</Alert>
        </Grid>
      </Toolbar>
      <Tabla />
      <SocioModal />
    </>
  )
}
